'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import marketingProcessData from '@/data/sectionsData/home/marketing-process.json';

const MarketingProcess: React.FC = () => {
  const { cards, title, subtitle } = marketingProcessData;
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCardExpansion = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

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
              cards?.slice(0, 3)?.map((value, i) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                  <div
                    className="dm-process-box"
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
                    <p>
                      {expandedCards.includes(i)
                        ? value.shortText
                        : `${value.shortText.slice(0, 150)}...`}
                    </p>
                    {value.shortText.length > 150 && (
                      <button
                        className="default-btn-two"
                        onClick={() => toggleCardExpansion(i)}
                      >
                        {expandedCards.includes(i) ? 'Read Less' : 'Read More'}
                      </button>
                    )}
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
