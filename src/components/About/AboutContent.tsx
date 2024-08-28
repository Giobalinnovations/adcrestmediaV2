'use client';

import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Image from 'next/image';
import aboutData from '@/data/sectionsData/about/about.json';
const AboutContent = () => {
  const [toggler, setToggler] = useState(false);
  const {
    sections: { aboutUs },
  } = aboutData;

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={['https://www.youtube.com/embed/bk7McNUjWgw']}
      />

      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <Image
                  src={aboutUs?.bgImage ?? ''}
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                />

                <div className="video-box">
                  <div
                    className="video-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>{aboutUs?.title}</h2>
                  <p>{aboutUs?.description}</p>
                </div>

                <div className="about-text">
                  <h4>{aboutUs?.whoWeAre?.title}</h4>
                  <p>{aboutUs?.whoWeAre?.description}</p>
                </div>
                <div className="about-text">
                  <h4>{aboutUs?.history?.title}</h4>
                  <p>{aboutUs?.history?.description}</p>
                </div>

                <div className="about-text">
                  <h4>{aboutUs?.mission?.title}</h4>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      {aboutUs?.mission?.description}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
