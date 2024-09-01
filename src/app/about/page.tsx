import React from 'react';
import NavbarTwo from '../../components/Layouts/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import AboutContent from '../../components/About/AboutContent';
import FunFactsTwo from '../../components/Common/FunFactsTwo';
import TeamStyleThree from '../../components/Common/TeamStyleThree';
import Feedback from '../../components/Common/Feedback';
import Partner from '../../components/Common/Partner';
import CtaAreaTwo from '../../components/Common/CtaAreaTwo';
import Footer from '../../components/Layouts/Footer';
import aboutData from '@/data/sectionsData/about/about.json';
export default function Page() {
  const { mainHeading, bgImage } = aboutData;
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle={mainHeading} BGImage={bgImage} />

      <AboutContent />

      <FunFactsTwo />

      {/* <TeamStyleThree /> */}

      <Feedback />

      {/* <Partner /> */}

      <CtaAreaTwo />

      <Footer />
    </>
  );
}
