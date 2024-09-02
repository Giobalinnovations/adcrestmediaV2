'use client';

import React from 'react';
import Link from 'next/link';

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
                    <Link
                      href="https://www.facebook.com/permalink.php?story_fbid=pfbid0igLzCTfN6iz8NxbUGFyyL4uHi3VL1JToYU87Lx8UxYKN3DhjoHxqJ7ZxwvSRjaDcl&id=61564646192912"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://x.com/adcrestmedia/status/1828692390640755104"
                      target="_blank"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/posts/adcrest-media-235234324_affiliatemarketing-businessgrowth-marketingstrategy-activity-7234458248978845697-0zov?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/p/C_NGy5fyR-s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
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
