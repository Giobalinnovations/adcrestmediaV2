'use client';

import React from 'react';
import Image from 'next/image';

import partnersData from '@/data/partners.json';

const Partner = () => {
  const { title, subtitle, description, partners } = partnersData;
  return (
    <>
      <div className="partner-area pt-100 pb-60">
        <div className="container">
          <div className="section-title">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <div className="row align-items-center justify-content-center">
            {partners &&
              partners.map((value, i) => (
                <div className="col-lg-2 col-6 col-sm-4" key={i}>
                  <div
                    className="single-partner"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <a href={value.link} target="_blank">
                      <Image
                        src={value.image}
                        alt="Partner Image"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
