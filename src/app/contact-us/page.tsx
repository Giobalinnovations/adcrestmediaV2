import React from 'react';
import NavbarTwo from '../../components/Layouts/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import ContactInfo from '../../components/Contact/ContactInfo';
import ContactForm from '../../components/Contact/ContactForm';
import Footer from '../../components/Layouts/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adcrest Media -  Contact Us',
  description: '',
  metadataBase: new URL('https://www.adcrestmedia.com'),

  alternates: {
    canonical: '/contact-us/',
  },
};
export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Contact Us" BGImage="/images/contact-us.webp" />

      <ContactInfo />

      <ContactForm />

      {/* <div className="ptb-100">
        <Newsletter />
      </div> */}

      <Footer />
    </>
  );
}
