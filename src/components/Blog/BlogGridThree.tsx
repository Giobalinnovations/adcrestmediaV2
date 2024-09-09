'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Blog, BlogResponse } from '@/lib/types';

const BlogGrid = ({ blogs }: { blogs: BlogResponse }) => {
  console.log(blogs.data);
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {blogs.data.length > 0 &&
              blogs.data.map((blog: Blog, i: number) => (
                <div
                  className="col-lg-4 col-md-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  // data-aos-delay={blog.aosDelay}
                >
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href={`/blog/${blog.slug}/`}>
                        <Image
                          src={blog.imageCover}
                          alt={blog.title}
                          width={510}
                          height={383}
                        />
                      </Link>

                      <div className="post-tag">
                        <Link href={`/blog/${blog.slug}/`}>
                          {blog.category.name}
                        </Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">
                        {new Date(blog.createdAt).toDateString()}
                      </span>
                      <h3 style={{ textTransform: 'capitalize' }}>
                        <Link href={blog.slug}>{blog.title}</Link>
                      </h3>

                      <p>{blog.excerpt}</p>

                      <Link href={blog.slug} className="read-more-btn">
                        Read More
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

            <div className="col-lg-12 col-md-12">
              {/* Pagination */}
              <div className="pagination-area">
                <a className="prev page-numbers">
                  <i className="fa-solid fa-angles-left"></i>
                </a>

                <a className="page-numbers">1</a>

                <span className="page-numbers current">2</span>

                <a className="page-numbers">3</a>

                <a className="page-numbers">4</a>

                <a className="next page-numbers">
                  <i className="fa-solid fa-angles-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
