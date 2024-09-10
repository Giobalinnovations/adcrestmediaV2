import React from 'react';
import NavbarTwo from '../../../components/Layouts/NavbarTwo';
import PageBanner from '../../../components/Common/PageBanner';
import BlogDetailsContent from '../../../components/Blog/BlogDetailsContent';
import Footer from '../../../components/Layouts/Footer';
import { Blog, SingleBlogResponse } from '@/lib/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return notFound();
  }

  return {
    title: post.data.title,
    description: post.data.description || 'Read our latest blog post',
    keywords: '',

    metadataBase: new URL('https://www.adcrestmedia.com'),

    alternates: {
      canonical: `/blog/${post.data.slug}/`,
    },
  };
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

      <PageBanner pageTitle="" BGImage="" className="pb-8 pt-0" />

      <BlogDetailsContent post={post} />

      <Footer />
    </>
  );
}

// Enable ISR
export const revalidate = 60; // Revalidate this page every 60 seconds
