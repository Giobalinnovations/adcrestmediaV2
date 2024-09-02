import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Image from 'next/image';

import singleServiceImg from '../../../public/images/services/single-service.jpg';
import WhyChooseUs from '../HomePages/DigitalMarketing/WhyChooseUs';

const ServiceDetailsContent = ({ service }: any) => {
  return (
    <>
      <div className="services-details-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="services-details-desc"></div>
            </div>
            <div className="col-md-12">
              <div className="services-details-desc">
                <ServiceSolutions expertise={service?.expertise} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="services-details-desc">
                <WhyChooseUs data={service?.whyChooseUs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;

export const ServiceSolutions = ({ expertise }: any) => {
  const { title, listItems } = expertise;

  return (
    <div className="">
      <div className="section-title">
        {/* <span className="sub-title marketing-color">{subtitle}</span> */}
        <h2>{title}</h2>
      </div>
      <div className="solutions-grid">
        {listItems.map((solution: any, index: any) => (
          <div
            key={index}
            className="solution-card d-flex gap-3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={solution.aosDelay}
          >
            <div
              className="icon"
              style={{
                backgroundColor: '#ff2c9c',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                flexShrink: '0',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              <i className="fa-solid fa-check fa"></i>
            </div>
            <div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
