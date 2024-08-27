'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ourServicesData from '@/data/sectionsData/home/what-we-do.json';

const OurServices: React.FC = () => {
  const { cards, subtitle, title } = ourServicesData;
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>

          <div className="row justify-content-center">
            {cards &&
              cards?.slice(0, 3)?.map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="dm-services-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Link href={value.viewDetailsLink}>
                      <Image
                        src={value.image}
                        alt="image"
                        width={600}
                        height={630}
                      />
                    </Link>
                    <div className="content">
                      <h3>
                        <Link href={value.viewDetailsLink}>{value.title}</Link>
                      </h3>
                      <p>{value.shortText}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
