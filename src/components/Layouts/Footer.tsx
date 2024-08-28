'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../public/images/logo.png';
import appData from '@/data/appData.json';
const Footer: React.FC = () => {
  const { footer } = appData;
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
                    {/* <Image src={logo} alt="Logo" width={150} height={40} /> */}
                    <h3>AdcrestMedia</h3>
                  </Link>
                </div>

                <p>{appData?.footer?.about?.description}</p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
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
                    <a href="tel:+324-9442-515">
                      {appData?.siteSettings?.contactInfo?.phone}
                    </a>
                    <br />
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a
                      href={`mailto:${appData?.siteSettings?.contactInfo?.email}`}
                    >
                      {appData?.siteSettings?.contactInfo?.email}
                    </a>
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
