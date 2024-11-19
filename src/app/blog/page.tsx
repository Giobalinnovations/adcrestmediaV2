import React from 'react';
import NavbarTwo from '../../components/Layouts/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import BlogGridThree from '../../components/Blog/BlogGridThree';
import Footer from '../../components/Layouts/Footer';
import { Blog, BlogResponse } from '@/lib/types';
// import { Blog } from '@/types/blog';
export const revalidate = 10;
async function getBlogs(): Promise<BlogResponse> {
  try {
    const res = await fetch(`${process.env.API_URL}/blogs/`, {
      // next: { revalidate: 3600 }, // Revalidate every hour
      cache: 'no-store',
    });

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
export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Blog" BGImage="/images/page-banner3.jpg" />

      <BlogGridThree blogs={blogs} />

      <Footer />
    </>
  );
}
