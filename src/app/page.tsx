import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomePages/DigitalMarketing/MainBanner';
import Partner from '../components/HomePages/DigitalMarketing/Partner';
import MarketingProcess from '../components/HomePages/DigitalMarketing/MarketingProcess';
import AboutContent from '../components/HomePages/DigitalMarketing/AboutContent';
import OurServices from '../components/HomePages/DigitalMarketing/OurServices';
import FunFacts from '../components/HomePages/DigitalMarketing/FunFacts';
import Testimonials from '../components/HomePages/DigitalMarketing/Testimonials';
import LatestNews from '../components/HomePages/DigitalMarketing/LatestNews';
import CtaArea from '../components/Common/CtaArea';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';
import BestServices from '@/components/HomePages/StartupAgency/BestServices';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <AboutContent />

      {/* <OurServices /> */}
      <BestServices />

      <MarketingProcess />

      <FunFacts />

      {/* <Testimonials /> */}

      <CtaArea />

      {/* <LatestNews /> */}

      {/* <Partner /> */}

      {/* <div className="pb-100">
        <Newsletter />
      </div> */}

      <Footer />
    </>
  );
}
