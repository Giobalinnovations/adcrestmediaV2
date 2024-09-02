'use client';

import React from 'react';
import Link from 'next/link';

type servicesData = {
  title: string;
  shortText: string;
  detailsLink: string;
  iconName: string;
  aosDelay: Number;
};

const ServicesStyleOne = ({
  servicesData,
}: {
  servicesData: servicesData[];
}) => {
  return (
    <>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {servicesData &&
              servicesData.map((value, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div
                    className="service-card-one"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.detailsLink}>{value.title}</Link>
                    </h3>
                    {/* <p>{value.shortText}</p> */}
                    <p>
                      {value.shortText.split(' ').slice(0, 25).join(' ')}
                      {value.shortText.split(' ').length > 25 ? '...' : ''}
                    </p>

                    <Link href={value.detailsLink} className="read-more-btn">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesStyleOne;
