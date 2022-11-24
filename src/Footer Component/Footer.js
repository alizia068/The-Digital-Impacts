import React from "react";
import "./Footer.css";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="Footer-Container">
        <div className="Footer--aside--Flex">
          <aside>
            <h3>COMPANY</h3>
            <div>
              <ul className="Footer-list">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Why Choose Us</a>
                </li>
                <li>
                  <a href="">Team</a>
                </li>
                <li>
                  <a href="">Pricing & Plans</a>
                </li>
                <li>
                  <a href="">Contacts</a>
                </li>
                <li>
                  <a href="">Investors</a>
                </li>
              </ul>
            </div>
          </aside>
          <aside>
            <h3>SERVICES</h3>
            <div>
              <ul className="Footer-list">
                <li>
                  <a href="">Web Design & Development</a>
                </li>
                <li>
                  <a href="">Why Choose Us</a>
                </li>
                <li>
                  <a href="">Specialized SEO Services</a>
                </li>
                <li>
                  <a href="">Specialized Social Services</a>
                </li>
                <li>
                  <a href="">Specialized Graphics Services</a>
                </li>
                <li>
                  <a href="">Investors</a>
                </li>
              </ul>
            </div>
          </aside>
          <aside>
            <h3>RESOURCES</h3>
            <div>
              <ul className="Footer-Resources--list">
                <li>
                  <a href="">Portfolio</a>
                </li>
                <li>
                  <a href="">Terms of Services</a>
                </li>
                <li>
                  <a href="">Help & FAQ</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Site map</a>
                </li>
              </ul>
              <div className="Footer--contactUs-button">
                <h4>Follow Us</h4>
                <div className="Footer---Socialsites--Container">
                  <div>
                    <a
                      className="Footer---Socialsites"
                      href="https://www.facebook.com/thedigitalimpacts"
                      target="Facebook"
                    >
                      <TiSocialFacebook />
                    </a>
                  </div>
                  <div>
                    <a
                      className="Footer---Socialsites"
                      href="https://www.instagram.com/the_digital_impacts_/?hl=en"
                      target="Instagram"
                    >
                      <IoLogoInstagram />
                    </a>
                  </div>
                  <div>
                    <a
                      className="Footer---Socialsites"
                      href="https://www.linkedin.com/company/89805803/admin/"
                      target="LinkdIn"
                    >
                      <TiSocialLinkedin />
                    </a>
                  </div>
                  <div>
                    <a
                      className="Footer---Socialsites"
                      href="https://twitter.com/The_Digital_Imp"
                      target="Twitter"
                    >
                      <CiTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div className="flags-Addresses">
          <aside className="Footer--FlagImage">
            <img src="./Logoimage/USA Flag.jpg" />
            <h4>USA :</h4>

            <p>1st Avenue, SW, Hickory,NC, USA</p>
            <p>Email: info@thedigitalimpacts.com</p>
          </aside>
          <aside className="Footer--FlagImage">
            <img src="./Logoimage/UK Flag.jpg" />
            <h4>UK :</h4>

            <p>Oldham Greater Manchester, United Kingdom</p>
            <p>Email: info@thedigitalimpacts.com</p>
          </aside>
          <aside className="Footer--FlagImage">
            <img src="./Logoimage/Canada Flag.jpg" />
            <h4>CANADA :</h4>

            <p>92 Avenue, Surrey, BC, Canada</p>
            <p>Email: info@thedigitalimpacts.com</p>
          </aside>
        </div>
        <div className="Footer--line"></div>
        <div className="Footer--Copyright">
          <p>Copyright © 2022 The Digital Impacts. All rights reserved</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
