import React from 'react';
import NavbarTwo from '../../components/Layouts/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import AboutContent from '../../components/About/AboutContent';
import CtaAreaTwo from '../../components/Common/CtaAreaTwo';
import Footer from '../../components/Layouts/Footer';
import aboutData from '@/data/sectionsData/about/about.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Trusted & Leading Lead Generation Company in the USA',
  description:
    'Discover Adcrest Media, an USA-based leader in digital marketing lead generation. Learn about our mission, values, and dedication to delivering excellence across the nation. Trusted by clients since 2015.',
  keywords:
    'digital marketing lead generation, lead generation services, lead generation companies, Digital Marketing Company in USA, best digital marketing agency in usa, ecommerce marketing agencies, affiliate marketing business, affiliate lead generation',

  metadataBase: new URL('https://www.adcrestmedia.com'),

  alternates: {
    canonical: '/about/',
  },
};

export default function Page() {
  const { mainHeading, bgImage } = aboutData;
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle={mainHeading} BGImage={bgImage} />

      <AboutContent />

      {/* <Partner /> */}

      <CtaAreaTwo />

      <Footer />
    </>
  );
}
