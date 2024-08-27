'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

import feedbackData from '@/data/testimonials.json';

const Testimonials: React.FC = () => {
  const { testimonials, title, subtitle } = feedbackData;
  return (
    <>
      <div className="marketing-testimonials-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>

          <Swiper
            autoHeight={true}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, Navigation]}
            className="marketing-testimonials-slides"
          >
            {testimonials &&
              testimonials?.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="marketing-testimonials-image">
                        <Image
                          src={value.image}
                          alt="image"
                          width={720}
                          height={720}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="marketing-testimonials-content">
                        <i className="icon fa-solid fa-quote-left"></i>
                        <p>
                          <q>{value.feedbackText}</q>
                        </p>

                        <div className="rating">
                          {value.rating.map((value, i) => (
                            <i className={value.iconName} key={i}></i>
                          ))}
                        </div>

                        <div className="info">
                          <h3>{value.name}</h3>
                          <span>{value.position}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
