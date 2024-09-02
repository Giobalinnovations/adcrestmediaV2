'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

import womenWithTable from '../../../../public/images/women-with-table.png';
import bestServicesData from '@/data/sectionsData/home/what-we-do.json';

const BestServices: React.FC = () => {
  const { cards, subtitle, title, description } = bestServicesData;
  return (
    <>
      <section className="services-area">
        <div className="container-fluid">
          <div className="row m-0">
            <div className="col-lg-5 p-0">
              <div className="services-inner">
                <div className="services-section-title">
                  <h2>{title}</h2>
                  <div className="bar"></div>
                  <p>{description}</p>

                  {/* <Image
                    src={womenWithTable}
                    alt="Women"
                    width={353}
                    height={303}
                  /> */}
                </div>
              </div>
            </div>

            <div className="col-lg-7 p-0">
              <div className="services-list">
                <Swiper
                  autoHeight={true}
                  spaceBetween={30}
                  navigation={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    600: {
                      slidesPerView: 2,
                    },
                    1400: {
                      slidesPerView: 3,
                    },
                  }}
                  modules={[Autoplay, Navigation]}
                  className="services-slides"
                >
                  {cards &&
                    cards.map((value, i) => (
                      <SwiperSlide key={i}>
                        <div className="single-services">
                          {/* <Image
                            src={value.image}
                            alt="image"
                            className="w-100"
                            width={330}
                            height={450}
                          /> */}
                          <div
                            className="w-100"
                            style={{ width: '330px', height: '450px' }}
                          ></div>
                          <div className="content">
                            <div className="icon">
                              <i className={value.iconName}></i>
                            </div>

                            <h3>{value.title}</h3>
                            <p>
                              {value.shortText
                                .split(' ')
                                .slice(0, 30)
                                .join(' ')}
                              {value.shortText.split(' ').length > 30
                                ? '...'
                                : ''}
                            </p>

                            <Link
                              href={value.detailsLink}
                              className="read-more-btn"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestServices;
