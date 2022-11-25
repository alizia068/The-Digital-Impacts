import React, { useRef } from "react";

// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactUs from "../Contact Us/ContactUs";
import "./Navbar.css";
const NavBar = () => {
  const home = useRef (null);
  const services = useRef (null);
  const aboutus = useRef (null);
  const portfolio = useRef (null);
  const contactus = useRef (null);
  const scrollToSection = (elementref) =>{
    window.scrollTo({
      top: elementref.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <div className="Navbar--style">
        <span className="logo-iamge">
          <a href="home">
            <img src="./Logoimage/digital-impacts.jpg" />
          </a>
        </span>
        <div className="ul-div">
          <ul className="Navbar--list">
            <li className="home-list">
              <Link to="/" onClick={()=>scrollToSection(home)}>Home</Link>
            </li>
            <li className="content-list">
              <Link to="/Services"  onClick={()=>scrollToSection(services)}>Services</Link>
            </li>
            <li className="about-us--list">
              <Link to="/AboutUs" onClick={()=>scrollToSection(aboutus)}>About Us</Link>
            </li>
            <li className="content-list">
              <Link to="/Portfolio" onClick={()=>scrollToSection(portfolio)}>Portfolio</Link>
            </li>
          </ul>
        </div>
        <div className="contact-button">
          <button onClick={()=>scrollToSection(contactus)}>Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
