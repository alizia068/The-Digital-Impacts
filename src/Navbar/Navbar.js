import React from "react";
import "./Navbar.css";
const NavBar = () => {
  return (
    <>
      <div className="Navbar--style">
        <span className="logo-iamge">
          <img src="./Logoimage/digital-impacts.jpg" />
        </span>
        <div className="ul-div">
          <ul className="Navbar--list">
            <li className="home-list">
              <a href="#">Home</a>
            </li>
            <li className="content-list">
              <a href="#">Services</a>
            </li>
            <li className="about-us--list">
              <a href="#">About Us</a>
            </li>
            <li className="content-list">
              <a href="#">Portfolio</a>
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
