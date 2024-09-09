import React from 'react';
import NavbarTwo from '../../components/Layouts/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import ContactInfo from '../../components/Contact/ContactInfo';
import ContactForm from '../../components/Contact/ContactForm';
import Footer from '../../components/Layouts/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Grow Your Business – Adcrest Media',
  description: `Get in touch with Adcrust Media, a leading white label marketing agencyin the USA. We're here to help your business grow with customized SEO, PPC, social media, and more. Contact us today!`,
  keywords:
    'white label marketing agency, seo digital marketing, best digital marketing agencies, best affiliate marketing, affiliate marketing for beginners, affiliate marketing providers, lead generation business, generate leads for business',

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
