'use client';

import React from 'react';
import Image from 'next/image';

import marketingProcessData from '@/data/sectionsData/home/marketing-process.json';

const MarketingProcess: React.FC = () => {
  return (
    <>
      <div className="dm-process-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title marketing-color">MARKETING PROCESS</span>
            <h2>We Have The Main Process to Run The Marketing</h2>
          </div>

          <div className="row justify-content-center">
            {marketingProcessData?.cards &&
              marketingProcessData?.cards?.slice(0, 3)?.map((value, i) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                  <div
                    className="dm-process-box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Image
                      src={value.image}
                      alt="image"
                      width={280}
                      height={228}
                    />
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingProcess;
