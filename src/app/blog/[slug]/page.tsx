import React from 'react';
import NavbarTwo from '../../../components/Layouts/NavbarTwo';
import PageBanner from '../../../components/Common/PageBanner';
import BlogDetailsContent from '../../../components/Blog/BlogDetailsContent';
import Footer from '../../../components/Layouts/Footer';
import { Blog, SingleBlogResponse } from '@/lib/types';

// Define the type for the blog post
interface BlogPost {
  message: string;
  success: boolean;
  data: Blog;

  // Add other fields as needed
}

// This function gets called at build time and also on-demand
export async function generateStaticParams() {
  // Fetch all blog post ids
  const res = await fetch(`${process.env.API_URL}/blogs`);
  const posts = await res.json();

  // Return an array of objects with slug params
  return posts?.data.map((post: Blog) => ({
    slug: post._id,
  }));
}

// This function gets called at build time and also on-demand
async function getBlogPost(slug: string): Promise<SingleBlogResponse> {
  const res = await fetch(`${process.env.API_URL}/blogs/${slug}`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });

  if (!res.ok) {
    throw new Error('Failed to fetch blog post');
  }

  return res.json();
}

export default async function BlogsDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle={post?.data?.title}
        BGImage="/images/page-banner2.jpg"
      />

      <BlogDetailsContent post={post} />

      <Footer />
    </>
  );
}

// Enable ISR
export const revalidate = 60; // Revalidate this page every 60 seconds
