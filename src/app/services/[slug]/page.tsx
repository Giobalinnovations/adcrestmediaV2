import React from 'react';
import NavbarTwo from '../../../components/Layouts/NavbarTwo';
import PageBanner from '../../../components/Common/PageBanner';
import ServiceDetailsContent from '../../../components/Services/ServiceDetailsContent';
import CtaAreaTwo from '../../../components/Common/CtaAreaTwo';
import Footer from '../../../components/Layouts/Footer';
import servicesData from '../../../data/sectionsData/home/what-we-do.json';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const slug = params.slug;
    const { cards } = servicesData;

    const service = cards.filter(
      (card: any) => card?.servicesDetailsPageContent?.slug === slug
    )[0];

    if (!service) {
      return notFound();
    }

    return {
      title: `${service?.metadata?.title ?? service?.title}`,
      description: service?.metadata?.description ?? '',
      keywords: service?.metadata?.keywords ?? '',
      metadataBase: new URL('https://www.adcrestmedia.com'),
      alternates: {
        canonical: `/services/${
          service?.servicesDetailsPageContent?.slug ?? ''
        }/`,
      },
    };
  } catch (error) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist',
    };
  }
}
export default function ServicesDetailsPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const slug = params.slug;
  const { cards } = servicesData;

  const service = cards.filter(
    (card: any) => card?.servicesDetailsPageContent?.slug === slug
  )[0];

  if (!service) {
    return notFound();
  }

  const { servicesDetailsPageContent } = service;
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle={servicesDetailsPageContent?.heroTitle ?? ''}
        pageDescription={servicesDetailsPageContent?.heroDescription ?? ''}
        BGImage={service?.image ?? ''}
      />
      {/*  */}
      <ServiceDetailsContent service={servicesDetailsPageContent} />

      <CtaAreaTwo servicesDetailsPageContent={servicesDetailsPageContent} />

      <Footer />
    </>
  );
}
