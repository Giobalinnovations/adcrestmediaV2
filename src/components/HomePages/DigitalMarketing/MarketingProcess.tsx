'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import marketingProcessData from '@/data/sectionsData/home/marketing-process.json';

const MarketingProcess: React.FC = () => {
  const { cards, title, subtitle } = marketingProcessData;

  return (
    <>
      <div className="dm-process-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title marketing-color">{subtitle}</span>
            <h2>{title}</h2>
          </div>

          <div className="row justify-content-center">
            {cards &&
              cards?.slice(0, 4)?.map((value, i) => (
                <div
                  className="col-lg-6 col-md-6 col-sm-6 d-flex flex-direction-column"
                  key={i}
                >
                  <div
                    className="dm-process-box flex-grow-1"
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
                    <p>{value?.shortText}</p>
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
