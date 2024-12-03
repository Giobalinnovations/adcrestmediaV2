'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heroData from '@/data/sectionsData/home/hero.json';

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="marketing-banner-area mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="marketing-banner-content">
                <span
                  className="sub-title"
                  // data-aos="fade-in"
                  // data-aos-duration="1000"
                  // data-aos-delay="100"
                >
                  {heroData?.subtitle}
                </span>

                <h1
                // data-aos="fade-in"
                // data-aos-duration="1000"
                // data-aos-delay="200"
                >
                  {heroData?.title}
                </h1>

                <p
                  // data-aos="fade-in"
                  // data-aos-duration="1000"
                  // data-aos-delay="300"
                  dangerouslySetInnerHTML={{ __html: heroData?.description }}
                >
                  {/* {heroData?.description} */}
                </p>

                <div className="d-flex flex-column flex-md-row gap-2 gap-md-3">
                  <Link
                    href={heroData?.button?.linkTwo}
                    className="default-btn-two"
                    // data-aos="fade-in"
                    // data-aos-duration="1000"
                    // data-aos-delay="400"
                  >
                    {heroData?.button?.labelTwo}
                    <i className="fas fa-chevron-right"></i>
                  </Link>
                  <Link
                    href={heroData?.button?.link}
                    className="default-btn-two"
                    // data-aos="fade-in"
                    // data-aos-duration="1000"
                    // data-aos-delay="400"
                  >
                    {heroData?.button?.label}{' '}
                    <i className="fas fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="marketing-banner-image"
                // data-aos="fade-up"
                // data-aos-duration="1000"
              >
                <Image
                  src={heroData?.banner?.bannerImage ?? ''}
                  alt={heroData?.banner?.bannerImageAlt ?? ''}
                  width={703}
                  height={652}
                  priority
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="dm-shape1">
          <Image
            src={heroData?.banner?.shapeImage ?? ''}
            alt={heroData?.banner?.shapeImageAlt ?? ''}
            width={600}
            height={533}
            priority
          />
        </div> */}
      </div>
    </>
  );
};

export default MainBanner;
