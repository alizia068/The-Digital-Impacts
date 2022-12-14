import React from "react";
import AboutUs from "../About Us/AboutUs";
import ContactUs from "../Contact Us/ContactUs";
import Portfolio from "../Portfolio.js/Portfolio";
import Services from "../Services/Services";
import WorkTogether from "../WorkTogether/WorkTogether";
import "./BodyContent.css";
const Home = () => {
  return (
    <>
      <div className="body-content">
        <div className="body-image--container">
          <span className="body-image">
            <img src="./Logoimage/Home-Image.jpg" />
          </span>
        </div>
        <div className="second-div">
          <h1>
            We are full Services
            <br /> <span>Digital Marketing Agency</span>
          </h1>
          <h2>Welcome to the Digital Impacts</h2>
          <div className="line"></div>
          <span>
            We partner with our clients with a team of professionals, we are
            able to provide <br /> the best on our side. We strive to be leaders
            in digital marketing services worldwide <br /> by revolutionizing
            the industry and setting new standards of professionalism and
            success.
          </span>
          <div className="read-more-button">
            <button className="message-us-button">Message Us Now</button>
          </div>
        </div>
      </div>
      <Services/>
      <AboutUs/>
      <Portfolio/>
      <ContactUs/>
      <WorkTogether/>    
    </>
  );
};
export default Home;
