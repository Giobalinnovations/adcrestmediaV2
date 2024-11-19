import React from 'react';
import NavbarTwo from '../../../components/Layouts/NavbarTwo';
import PageBanner from '../../../components/Common/PageBanner';
import BlogDetailsContent from '../../../components/Blog/BlogDetailsContent';
import Footer from '../../../components/Layouts/Footer';
import { Blog, SingleBlogResponse } from '@/lib/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';

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
    title: post?.data?.title ?? '',
    description: post?.data?.description ?? '',
    keywords: post?.data?.keywords ?? '',

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

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.adcrestmedia.com/blog/${post.data.slug}/`,
    },
    headline: post?.data?.heading,
    description: post?.data?.description,
    image: post?.data?.imageCover,
    author: {
      '@type': 'Organization',
      name: '',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Adcrest Media',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.adcrestmedia.com/_next/static/media/logo.2b6c0563.png',
      },
    },
    datePublished: post?.data?.createdAt,
    dateModified: post?.data?.updatedAt,
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post?.data?.faqs?.map((faq: any) => ({
      '@type': 'Question',
      name: faq?.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq?.answer,
      },
    })),
  };
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="" BGImage="" className="pb-8 pt-0" />

      <BlogDetailsContent post={post} />

      <Footer />

      <Script
        id="structured-data-blogs-details-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([blogJsonLd, faqJsonLd]),
        }}
      />
    </>
  );
}

// Enable ISR
export const revalidate = 60; // Revalidate this page every 60 seconds
