import React from "react";

import { Link } from "react-router-dom";
import HeaderLink from './Link/HeaderLink';

const Header = () => (
  <header className="header-area header-sticky">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            <HeaderLink to="/" className="logo">
              Resume Builder
            </HeaderLink>
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
              <li className="scroll-to-section">
                <HeaderLink to="#welcome" className="active">
                  Home
                </HeaderLink>
              </li>
              <li className="scroll-to-section">
                <HeaderLink to="#about" className>
                  About
                </HeaderLink>
              </li>
              <li className="scroll-to-section">
                <HeaderLink to="#services" className>
                  Services
                </HeaderLink>
              </li>
              <li className="scroll-to-section">
                <a href="#frequently-question">Frequently Questions</a>
              </li>
              <li className="submenu">
                <a href="javascript:;">My Account</a>
                <ul>
                  <li>
                    <a href>About Us</a>
                  </li>
                  <li>
                    <a href>Features</a>
                  </li>
                  <li>
                    <a href>FAQ's</a>
                  </li>
                  <li>
                    <a href>Blog</a>
                  </li>
                </ul>
              </li>
              <li className="scroll-to-section">
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
            <a className="menu-trigger">
              <span>Menu</span>
            </a>
            {/* ***** Menu End ***** */}
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
