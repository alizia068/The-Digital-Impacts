import React from "react";
import "./Portfolio.css";
import { CgWebsite } from "react-icons/cg";
import { BsWordpress } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";
import { FaAws } from "react-icons/fa";
const Portfolio = () => {
  return (
    <>
      <div>
        <div className="Portfolio---heading">
          <h1>Projects We've Deliverd</h1>
        </div>
        <div className="Portfolio--Container">
          <p>
            Over the past 10 years, we have designed and built a wide range of
            high-quality products from scratch. Our team has finished various
            web and mobile apps related to various spheres including e-learning,
            healthcare, e-commerce, advertising, augmented reality, action
            sports, finance and sharing economy.
          </p>
        </div>
        {/* first Portfolio */}
        <div className="Portfolio1--container">
          <div className="Portfolio1">
            <p>INDUSTRY</p>
            <h1>REVIVE</h1>
            <p>Revive Beauty Salon & Institute</p>
            <div className="webdevelopment--icon">
              <h1>
                <CgWebsite />
              </h1>
              <p>WEB DEVELOPMENT</p>
            </div>
            <div className="webdevelopment--icon">
              <h1>
                <CgWebsite />
              </h1>
              <p>QUALITY ASSURANCE</p>
            </div>
            <div className="webdevelopment--aws-icon">
              <h1>
                <GrReactjs />
              </h1>
              <h1>
                <FaAws />
              </h1>
            </div>
          </div>
          <div className="Portfolio1--image">
            <a href="https://revivesalon.pk/" target="_blank">
              <img src="./Logoimage/Revive.jpg" />
            </a>
          </div>
        </div>
        {/* 2nd Portfolio */}
        <div className="Portfolio1--container">
          <div>
            <span className="Portfolio1--image">
              <a href="https://voeuxcosmetics.com/" target="_blank">
                <img src="./Logoimage/Voeux.jpg" />
              </a>
            </span>
          </div>
          <div className="Portfolio1">
            <p>INDUSTRY</p>
            <h1>Voeux</h1>
            <p>Natural Skin Care</p>
            <div className="webdevelopment--icon">
              <h1>
                <CgWebsite />
              </h1>
              <p>WEB DEVELOPMENT</p>
            </div>
            <div className="webdevelopment--icon">
              <h1>
                <CgWebsite />
              </h1>
              <p>QUALITY ASSURANCE</p>
            </div>
            <div className="webdevelopment--aws-icon">
              <h1>
                <BsWordpress />
              </h1>
              <h1>
                <FaAws />
              </h1>
            </div>
          </div>
        </div>
        {/* 3rd Portfolio */}
        <div className="Portfolio1--container">
          <div className="Portfolio1">
            <p>INDUSTRY</p>
            <h1>KINGZ</h1>
            <p>Ecommerce Website</p>
            <div className="webdevelopment--icon">
              <h1>
                <CgWebsite />
              </h1>
              <p>WEB DEVELOPMENT</p>
            </div>
            <div className="webdevelopment--icon">
              <h1>
                <CgWebsite />
              </h1>
              <p>QUALITY ASSURANCE</p>
            </div>
            <div className="webdevelopment--aws-icon">
              <h1>
                <BsWordpress />
              </h1>
              <h1>
                <FaAws />
              </h1>
            </div>
          </div>
          <div>
            <span className="Portfolio1--image">
              <a href="https://www.kingz.com/" target="_blank">
                <img src="./Logoimage/The Kingz.jpg" />
              </a>
            </span>
          </div>
        </div>
        {/* 4th Portfolio */}
        <div className="Portfolio1--container">
          <div>
            <span className="Portfolio1--image">
              <a href="https://unifresh.com.au/" target="_blank">
                <img src="./Logoimage/Unifresh.jpg" />
              </a>
            </span>
          </div>
          <div className="Portfolio1">
            <p>INDUSTRY</p>
            <h1>Unifresh</h1>
            <p>Fruit and Vegetable Retail Store</p>
            <div className="webdevelopment--icon">
              <h1>
                <CgWebsite />
              </h1>
              <p>WEB DEVELOPMENT</p>
            </div>
            <div className="webdevelopment--icon">
              <h1>
                <CgWebsite />
              </h1>
              <p>QUALITY ASSURANCE</p>
            </div>
            <div className="webdevelopment--aws-icon">
              <h1>
                <GrReactjs />
              </h1>
              <h1>
                <FaAws />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
