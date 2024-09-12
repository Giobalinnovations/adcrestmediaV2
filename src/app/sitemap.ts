import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import services from '../../src/data/sectionsData/home/what-we-do.json';
import { BlogResponse } from '@/lib/types';

const BASE_URL = 'https://www.adcrestmedia.com';

function getPages(dir: string, baseRoute: string = ''): string[] {
  const files = fs.readdirSync(dir);
  let routes: string[] = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (
        file !== 'api' &&
        !file.startsWith('_') &&
        !file.startsWith('.') &&
        file !== 'services' &&
        file !== 'blog'
      ) {
        routes = routes.concat(getPages(filePath, path.join(baseRoute, file)));
      }
    } else if (
      file === 'page.tsx' ||
      file === 'page.ts' ||
      file === 'page.js'
    ) {
      routes.push(baseRoute);
    }
  }

  return routes;
}

async function getBlogs(): Promise<BlogResponse> {
  try {
    const res = await fetch(`${process.env.API_URL}/blogs/`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error('Failed to fetch blogs');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return { message: 'Error fetching blogs', results: 0, data: [] };
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogs: BlogResponse;
  try {
    blogs = await getBlogs();
  } catch (error) {
    console.error('Error in sitemap generation:', error);
    blogs = { message: 'Error fetching blogs', results: 0, data: [] };
  }

  const appDir = path.join(process.cwd(), 'src/app');
  const routes = getPages(appDir);

  const sitemap: MetadataRoute.Sitemap = routes.map(route => ({
    url: `${BASE_URL}${route === '' ? '/' : `/${route}/`}`,
    lastModified: new Date(),
  }));

  blogs.data.forEach(blog => {
    sitemap.push({
      url: `${BASE_URL}/blog/${blog.slug}/`,
      lastModified: new Date(),
    });
  });

  sitemap.push({
    url: `${BASE_URL}/services/`,
    lastModified: new Date(),
  });
  sitemap.push({
    url: `${BASE_URL}/blog/`,
    lastModified: new Date(),
  });

  services.cards.forEach(service => {
    if (
      service.servicesDetailsPageContent &&
      service.servicesDetailsPageContent.slug
    ) {
      sitemap.push({
        url: `${BASE_URL}/services/${service.servicesDetailsPageContent.slug}/`,
        lastModified: new Date(),
      });
    }
  });

  return sitemap;
}
