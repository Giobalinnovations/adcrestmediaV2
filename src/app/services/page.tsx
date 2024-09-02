import React from 'react';
import NavbarTwo from '../../components/Layouts/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import ServicesStyleOne from '../../components/Services/ServicesStyleOne';
import CtaAreaTwo from '../../components/Common/CtaAreaTwo';
import Footer from '../../components/Layouts/Footer';
import bestServicesData from '@/data/sectionsData/home/what-we-do.json';
export default function Page() {
  const { cards, subtitle, title, description, bgImage } = bestServicesData;
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle={title} BGImage={bgImage} />

      <ServicesStyleOne servicesData={cards} />

      <CtaAreaTwo />

      <Footer />
    </>
  );
}
