import React from 'react';
import NavbarTwo from '../../components/Layouts/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import PrivacyPolicyContent from '../../components/PrivacyPolicy/PrivacyPolicyContent';
import Footer from '../../components/Layouts/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adcrest Media - Privacy Policy',
  description: '',
  metadataBase: new URL('https://www.adcrestmedia.com'),

  alternates: {
    canonical: '/privacy-policy/',
  },
};
export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Privacy Policy"
        BGImage="/images/page-banner5.jpg"
      />

      <PrivacyPolicyContent />

      <Footer />
    </>
  );
}
