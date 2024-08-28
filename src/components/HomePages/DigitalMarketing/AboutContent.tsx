'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aboutUsData from '@/data/sectionsData/home/about-us.json';
import toggleItemExpansion from '@/utils/toggleText';
const AboutContent: React.FC = () => {
  const { image, subtitle, title, description, listItems, button } =
    aboutUsData;
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  // const toggleItemExpansion = (index: number) => {
  //   setExpandedItems(prev =>
  //     prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
  //   );
  // };

  return (
    <>
      <div className="marketing-about-area overflow-hidden pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="marketing-about-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <Image src={image} alt="image" width={658} height={591} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="marketing-about-content"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <span className="sub-title">{subtitle}</span>
                <h2 dangerouslySetInnerHTML={{ __html: title }} />
                <p>{description}</p>

                <div className="row">
                  {listItems?.map((item, index) => (
                    <div className="col-lg-6" key={index}>
                      <div className="box">
                        <i className="fa-solid fa-check"></i>
                        <h3>{item?.title}</h3>
                        <p
                          onClick={() =>
                            toggleItemExpansion(index, setExpandedItems)
                          }
                          style={{ cursor: 'pointer' }}
                        >
                          {expandedItems.includes(index)
                            ? item?.description
                            : `${item?.description.slice(0, 60)}...`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href={button?.link} className="default-btn-two">
                  {button?.label} <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
