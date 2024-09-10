import React from 'react';
import Link from 'next/link';
import { Blog, BlogResponse, Category, CategoryResponse } from '@/lib/types';

async function getRecentBlogs(): Promise<BlogResponse> {
  try {
    const res = await fetch(
      `${process.env.API_URL}/blogs?limit=5&sort=createdAt:desc`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch blogs');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch blogs');
    // return { message: 'Error fetching blogs', results: 0, data: [] };
  }
}
async function getCategories(): Promise<CategoryResponse> {
  try {
    const res = await fetch(`${process.env.API_URL}/category`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch categories');
  }
}

export default async function BlogSidebar() {
  const recentBlogs = await getRecentBlogs();
  const categories = await getCategories();

  return (
    <>
      <div className="widget-area" id="secondary">
        {/* Recent posts */}
        <div className="widget widget_recent_entries">
          <h3 className="widget-title">Recent posts</h3>
          <ul>
            {recentBlogs.data.map((blog: Blog) => (
              <li key={blog._id}>
                <Link href={`/blog/${blog?.slug}/`}>{blog?.title}</Link>
                <span className="post-date">
                  {new Date(blog?.createdAt).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            {categories.data.map((category: Category) => (
              <li key={category._id}>
                <Link href={`#`}>
                  {category?.name}{' '}
                  <span className="post-count">
                    ({categories?.data?.length})
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
