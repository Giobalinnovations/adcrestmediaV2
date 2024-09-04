import React from 'react';
import NavbarTwo from '../../components/Layouts/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import AboutContent from '../../components/About/AboutContent';
import CtaAreaTwo from '../../components/Common/CtaAreaTwo';
import Footer from '../../components/Layouts/Footer';
import aboutData from '@/data/sectionsData/about/about.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adcrest Media - About Us',
  description: '',
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
