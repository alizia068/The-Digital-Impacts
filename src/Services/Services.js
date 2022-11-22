import React from "react";
import "./Services.css";
import { GiOpeningShell } from "react-icons/gi";
import { AiOutlineRocket } from "react-icons/ai";
import { GiBulletImpacts } from "react-icons/gi";
const Services = () => {
  return (
    <>
      {/* services */}
      <div className="heading">
        <h2 className="Services-heading">
          We <span>Provide</span> The Best
          <br />
          Services With <span>Our</span>
          <br />
          <span>Developers</span>
        </h2>
      </div>
      <div className="Services--Cards">
        {/* First card */}
        <card className="Services--Card1">
          <h3>Digital Marketing</h3>
          <h2>
            <GiBulletImpacts />
          </h2>
          <p className="ServicesCard--P-Tag">
            The <span>Digital Impacts</span> have compiled a list of the best
            digital marketing companies in the world.
          </p>
        </card>

        {/* Second card */}
        <card className="Services--Card1">
          <h3>Web Development</h3>
          <h2>
            <AiOutlineRocket />
          </h2>
          <p className="ServicesCard--P-Tag">
            Web design services comprise the process of user interface{" "}
            <span>(UI)</span> and user experience <span>(UX)</span> design of
            any web-based solution.
          </p>
        </card>
        {/* 3rd card */}
        <card className="Services--Card1">
          <h3>SEO</h3>
          <h2>
            <GiOpeningShell />
          </h2>
          <p className="ServicesCard--P-Tag">
            Search engine optimization is the process of improving the quality
            and quantity of website traffic to a website or a web page from
            search engines. SEO targets unpaid traffic rather than direct
            traffic or paid traffic.
          </p>
        </card>
      </div>

      {/* Plans */}

      <div className="heading">
        <h1 className="Services-heading">
          Industries We
          <br /> <span>Work With</span>
        </h1>
        <p className="Services-heading">
          We work as a technology partner for various industries <br />
          Our expertise can be applied to the specific demands <br />
          and nuances in your industry
        </p>
      </div>
      <div className="Services--industries">
        {/* 1st industry */}
        <div>
          <img src="./Logoimage/Estate.jpg" />
          <h4>REAL ESTATE</h4>
        </div>
        {/* 2nd industry */}
        <div>
          <img src="./Logoimage/Education.jpg" />
          <h4>EDUCATION</h4>
        </div>

        {/* 3rd industry */}
        <div>
          <img src="./Logoimage/Commerce.jpg" />
          <h4>COMMERCE</h4>
        </div>
      </div>
      <div className="Services--industries">
        {/* 4th industry */}
        <div>
          <img src="./Logoimage/Hospitality.jpg" />
          <h4>HOSPITALITY</h4>
        </div>
        {/* 5th industry */}
        <div>
          <img src="./Logoimage/Health-Care.jpg" />
          <h4>HEALTHCARE</h4>
        </div>
        {/* 6th industry */}
        <div>
          <img src="./Logoimage/Fintech.jpg" />
          <h4>FINTECH</h4>
        </div>
      </div>
    </>
  );
};
export default Services;
