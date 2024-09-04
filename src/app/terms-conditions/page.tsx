import React from 'react';
import NavbarTwo from '../../components/Layouts/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import TermsAndConditionsContent from '../../components/TermsAndConditions/TermsAndConditionsContent';
import Footer from '../../components/Layouts/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adcrest Media - Terms and Conditions',
  description: '',
  metadataBase: new URL('https://www.adcrestmedia.com'),

  alternates: {
    canonical: '/terms-conditions/',
  },
};
export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Terms Conditions"
        BGImage="/images/page-banner2.jpg"
      />

      <TermsAndConditionsContent />

      <Footer />
    </>
  );
}
