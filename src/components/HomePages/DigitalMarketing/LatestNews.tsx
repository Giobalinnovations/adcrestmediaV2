// 'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Blog, BlogResponse } from '@/lib/types';
// import { Blog } from '@/types/blog';

async function getBlogs(): Promise<BlogResponse> {
  try {
    const res = await fetch(`${process.env.API_URL}/blogs`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error('Failed to fetch blogs');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return { message: 'Error fetching blogs', results: 0, data: [] };
  }
}

const LatestNews = async () => {
  const blogs = await getBlogs();
  console.log(blogs);
  return (
    <>
      <div className="pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">News</span>
            <h2>Our Latest News</h2>
          </div>

          <div className="row justify-content-center">
            {blogs?.data?.length > 0 &&
              blogs?.data?.slice(0, 3).map((blog, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="single-blog-item"
                    data-aos="fade-up"
                    // data-aos-duration="1000"
                    // data-aos-delay={value.aosDelay}
                  >
                    <div className="blog-image">
                      <Link href={`/blog/${blog.slug}/`}>
                        <Image
                          src={blog?.imageCover ?? ''}
                          alt="image"
                          width={510}
                          height={400}
                        />
                      </Link>

                      <div className="post-tag">
                        <Link href={`/blog/${blog.slug}/`}>
                          {blog?.category?.name}
                        </Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">
                        {new Date(blog?.createdAt).toLocaleDateString()}
                      </span>
                      <h3 style={{ textTransform: 'capitalize' }}>
                        <Link href={`/blog/${blog.slug}/`}>{blog.title}</Link>
                      </h3>

                      <p>{blog?.excerpt}</p>

                      <Link
                        href={`/blog/${blog.slug}/`}
                        className="read-more-btn"
                      >
                        Read More
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
