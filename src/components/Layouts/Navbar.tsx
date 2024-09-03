'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuItem from './MenuItem';
import MegaMenu from './MegaMenu';
import { menus } from '../../../libs/menus';

import logo from '../../../public/images/logo.png';
import appData from '@/data/appData.json';
import HighlightText from '../Common/HighlightText';
const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId?.classList.add('is-sticky');
      } else {
        elementId?.classList.remove('is-sticky');
      }
    });
  }, []);

  const classOne = menu
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show';
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="top-header text-white border-bottom d-none d-md-block">
          <div className="container py-3">
            <div className="row align-items-center">
              <div className="col-md-12 text-end">
                <Link
                  href={`mailto:${appData?.siteSettings?.contactInfo?.email}`}
                  className="text-white me-3"
                >
                  <HighlightText>
                    <i className="fa fa-envelope me-1" />
                    {appData?.siteSettings?.contactInfo?.email}
                  </HighlightText>
                </Link>
                <Link
                  href={`tel:${appData?.siteSettings?.contactInfo?.phone}`}
                  className="text-white"
                >
                  <HighlightText>
                    <i className="fa fa-phone me-1" />
                    {appData?.siteSettings?.contactInfo?.phone}
                  </HighlightText>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <h5>AdcrestMedia</h5>
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                {appData?.menu?.items?.map(menuItem => (
                  <MenuItem key={menuItem.id} {...menuItem} />
                ))}
              </ul>

              <div className="others-options">
                <Link href="/contact-us/" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
