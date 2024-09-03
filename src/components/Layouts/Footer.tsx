'use client';

import React from 'react';
import Link from 'next/link';
import logo from '../../../public/images/logo.png';
import appData from '@/data/appData.json';
import Image from 'next/image';
const Footer: React.FC = () => {
  const {
    footer,
    siteSettings: { socialMedia },
  } = appData;
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <Image src={logo} alt="Logo" width={150} height={40} />
                  </Link>
                </div>

                <p>{appData?.footer?.about?.description}</p>

                <ul className="social-links">
                  {appData?.footer?.socialLinks.map((item: any) => (
                    <li key={item.platform}>
                      <Link href={item.url} target="_blank">
                        <i className={item.icon}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget ml-4 pl-5"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h3>Explore</h3>

                <ul className="list">
                  {footer &&
                    footer?.menu?.explore.map(item => (
                      <li key={item.label}>
                        <Link href={item?.link ?? '#'}>{item?.label}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-footer-widget ml-4"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <h3>Quick Links</h3>

                <ul className="list">
                  {footer &&
                    footer?.menu?.quickLinks?.map(item => (
                      <li key={item.label}>
                        <Link href={item?.link ?? '#'}>{item?.label}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h3>Get in Touch</h3>

                <ul className="get-in-touch">
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    {appData?.siteSettings?.contactInfo?.address}
                  </li>
                  <li>
                    <i className="fa-solid fa-headset"></i>
                    <Link
                      href={`tel:${appData?.siteSettings?.contactInfo?.phone}`}
                    >
                      {appData?.siteSettings?.contactInfo?.phone}
                    </Link>
                    <br />
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <Link
                      href={`mailto:${appData?.siteSettings?.contactInfo?.email}`}
                    >
                      {appData?.siteSettings?.contactInfo?.email}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              Copyright &copy; {currentYear} adcrestmedia. All Rights Reserved{' '}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
