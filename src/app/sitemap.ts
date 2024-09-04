import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import services from '../../src/data/sectionsData/home/what-we-do.json';
const BASE_URL = 'https://www.adcrestmedia.com';
// TODO: Handle dynamic blog slug same as serices page slug
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
        file !== 'services'
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

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'src/app');
  const routes = getPages(appDir);

  const sitemap: MetadataRoute.Sitemap = routes.map(route => ({
    url: `${BASE_URL}${route === '' ? '/' : `/${route}/`}`,
    lastModified: new Date(),
    // priority: 0.8,
  }));

  sitemap.push({
    url: `${BASE_URL}/services/`,
    lastModified: new Date(),
    // priority: 0.7,
  });

  services.cards.forEach(service => {
    sitemap.push({
      url: `${BASE_URL}/services/${service.servicesDetailsPageContent.slug}/`,
      lastModified: new Date(),
      // priority: 0.7,
    });
  });

  return sitemap;
}
