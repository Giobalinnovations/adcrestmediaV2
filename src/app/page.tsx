import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomePages/DigitalMarketing/MainBanner';
import MarketingProcess from '../components/HomePages/DigitalMarketing/MarketingProcess';
import AboutContent from '../components/HomePages/DigitalMarketing/AboutContent';
import FunFacts from '../components/HomePages/DigitalMarketing/FunFacts';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';
import BestServices from '@/components/HomePages/StartupAgency/BestServices';
import LatestNews from '@/components/HomePages/DigitalMarketing/LatestNews';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <AboutContent />

      <BestServices />

      <MarketingProcess />

      <FunFacts />

      <LatestNews />
      <CtaArea />

      <Footer />
    </>
  );
}
