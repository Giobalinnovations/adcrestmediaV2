import React from 'react';
import '../../public/styles/bootstrap.min.css';
import '../../public/styles/animate.min.css';
import 'animate.css';
import '../../public/styles/all.min.css';
import '../../public/styles/pe-icon-7-stroke.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'swiper/css';
import 'swiper/css/bundle';

// Software Startup Home Style
import '../../public/styles/software-home-page.css';
// App Showcase Home Style
import '../../public/styles/app-home-page.css';
// Digital Marketing Home Page Style
import '../../public/styles/digital-marketing-home-page.css';
// Personal Portfolio Home Style
import '../../public/styles/personal-portfolio-home-page.css';
// Business Consulting Home Page Style
import '../../public/styles/business-consulting-home-page.css';
// SaaS Startup Home Page Style
import '../../public/styles/saas-startup-home-page.css';
// Freelancer Portfolio Home Page Style
import '../../public/styles/freelancer-portfolio-home-page.css';
// Cyber Security Agency Home Page Style
import '../../public/styles/cyber-security-agency-home-page.css';

// Global Style
import '../../public/styles/style.css';
import '../../public/styles/responsive.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

import type { Metadata } from 'next';
import { Inter, Saira } from 'next/font/google';
import AosAnimation from '@/components/Layouts/AosAnimation';
import GoTop from '@/components/Layouts/GoTop';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
// For all body text font
const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// For all heading font
const saira = Saira({
  subsets: ['latin'],
  variable: '--font-saira',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Adcrest Media: Best Digital Marketing Company & Agency in USA',
  description: `Adcrest Media is a US based digital marketing company & agency. We offer customized digital marketing services & ideas to grow your business. LET'S WORK TOGETHER FOR A BETTER GROWTH.`,
  keywords:
    'digital marketing agency, Digital Marketing Company, Marketing Agency, Digital Marketing Agencies, Digital Marketing Company in USA, best digital marketing agency in usa, digital marketing services in usa',

  metadataBase: new URL('https://www.adcrestmedia.com'),

  alternates: {
    canonical: '/',
    languages: {
      'en-us': 'https://www.adcrestmedia.com',
    },
  },

  verification: {
    google: 'Qc3y83UBwkL-ik_NT222cOMI1rJJQRfuNiJ6Sb0x0ig',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-us">
      <body className={`${inter.variable} ${saira.variable}`}>
        {children}

        <AosAnimation />

        <GoTop />
        <ToastContainer />
        <GoogleTagManager gtmId="G-V86SEW543P" />
        <GoogleAnalytics gaId="G-V86SEW543P" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Adcrest Media',
                url: 'https://www.adcrestmedia.com',
                logo: 'https://www.adcrestmedia.com/logo.png',
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+1-800-123-4567',
                  contactType: 'Customer Service',
                  areaServed: 'US',
                  availableLanguage: 'English',
                },
                sameAs: [
                  'https://www.facebook.com/adcrestmedia',
                  'https://www.linkedin.com/company/adcrest-media',
                  'https://twitter.com/adcrestmedia',
                ],
                founder: {
                  '@type': 'Person',
                  name: 'Founder Name',
                },
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '1234 Digital Lane',
                  addressLocality: 'New York',
                  addressRegion: 'NY',
                  postalCode: '10001',
                  addressCountry: 'US',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Service',
                serviceType: 'Digital Marketing Services',
                provider: {
                  '@type': 'Organization',
                  name: 'AdCrest Media',
                  url: 'https://www.adcrestmedia.com',
                  logo: 'https://www.adcrestmedia.com/logo.png',
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+1-123-456-7890',
                    contactType: 'Customer Service',
                    areaServed: 'US',
                    availableLanguage: 'English',
                  },
                  sameAs: [
                    'https://www.facebook.com/adcrestmedia',
                    'https://www.linkedin.com/company/adcrestmedia',
                  ],
                },
                description:
                  'AdCrest Media offers comprehensive digital marketing services, including SEO, PPC, social media marketing, and web design to help businesses grow their online presence.',
                areaServed: {
                  '@type': 'Place',
                  name: 'United States',
                },
                offers: {
                  '@type': 'Offer',
                  priceCurrency: 'USD',
                  price: '',
                  url: 'https://www.adcrestmedia.com/services',
                  eligibleRegion: {
                    '@type': 'Place',
                    name: 'United States',
                  },
                },
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}
