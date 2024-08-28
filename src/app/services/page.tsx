import React from 'react';
import NavbarTwo from '../../components/Layouts/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import ServicesStyleOne from '../../components/Services/ServicesStyleOne';
import CtaAreaTwo from '../../components/Common/CtaAreaTwo';
import Footer from '../../components/Layouts/Footer';
import servicesData from '@/data/sectionsData/services/services.json';
export default function Page() {
  const { services, mainHeading, bgImage } = servicesData;
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle={mainHeading} BGImage={bgImage} />

      <ServicesStyleOne servicesData={services} />

      <CtaAreaTwo />

      <Footer />
    </>
  );
}
