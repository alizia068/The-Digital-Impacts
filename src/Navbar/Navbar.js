import React from "react";
import "./Navbar.css";
const NavBar = () => {
  return (
    <>
      <div className="Navbar--style">
        <span className="logo-iamge">
          <img src="./Logoimage/XCOM Logo.png" />
        </span>
        <div className="ul-div">
          <ul className="Navbar--list">
            <li className="home-list">
              <a href="#">Home</a>
            </li>
            <li className="about-us--list">
              <a href="#">About Us</a>
            </li>
            <li className="content-list">
              <a href="#">Content</a>
            </li>
            <li className="content-list">
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
        <div className="contact-button">
          <button>Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
