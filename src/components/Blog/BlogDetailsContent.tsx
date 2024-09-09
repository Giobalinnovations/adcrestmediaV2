// 'use client';

import React from 'react';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';
import Image from 'next/image';

import { SingleBlogResponse } from '@/lib/types';

export default function BlogRightSidebar({
  post,
}: {
  post: SingleBlogResponse;
}) {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details">
                <div className="article-img">
                  <Image
                    src={post?.data?.imageCover ?? ''}
                    alt="image"
                    width={800}
                    height={600}
                  />
                </div>

                <div className="article-content">
                  <ul className="entry-meta">
                    <li>
                      <i className="fa-solid fa-calendar-days"></i>
                      <span>
                        {new Date(post?.data?.createdAt).toLocaleDateString()}
                      </span>
                    </li>
                  </ul>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: post?.data?.content ?? '',
                    }}
                  />

                  {/* Category */}
                  {/* <ul className="category">
                    <li>
                      <span>Tags:</span>
                    </li>
                    <li>
                      <Link href="/blog">Business</Link>
                    </li>
                    <li>
                      <Link href="/blog">IT</Link>
                    </li>
                    <li>
                      <Link href="/blog">Tips</Link>
                    </li>
                    <li>
                      <Link href="/blog">Design</Link>
                    </li>
                  </ul> */}
                </div>
              </div>

              {/* Post controls */}
              {/* <div className="post-controls-buttons">
                <div>
                  <Link href="#">Prev Post</Link>
                </div>
                <div>
                  <Link href="#">Next Post</Link>
                </div>
              </div> */}
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="pl-20">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
