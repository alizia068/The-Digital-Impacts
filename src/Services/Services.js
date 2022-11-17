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
        <card className="Services--Card1">
          <h3>Software Development</h3>
          <h2>
            <GiOpeningShell />
          </h2>
          <p className="ServicesCard--P-Tag">
            31 Years of creating Business
            <br />
            Software. Software development
            <br />
            services is your possibility to
            <br />
            outsource software.
          </p>
        </card>
        <card className="Services--Card1">
          <h3>Website Development</h3>
          <h2>
            <AiOutlineRocket />
          </h2>
          <p className="ServicesCard--P-Tag">
            Web design services comprise the
            <br />
            process of user interface <span>(UI)</span> and
            <br />
            user experience <span>(UX)</span> design of any
            <br />
            web-based solution.
          </p>
        </card>
        <card className="Services--Card1">
          <h3>Digital Marketing</h3>
          <h2>
            <GiBulletImpacts />
          </h2>
          <p className="ServicesCard--P-Tag">
            The <span>Digital Impacts</span> have compiled a
            <br />
            list of the best digital marketing
            <br />
            companies in the world.
          </p>
        </card>
      </div>

{/* Plans */}

      <div className="heading">
        <h2 className="Services-heading">
          Select A Suitable <span>Plan</span> For Your
          <br />
          Next <span>Projects</span>
          
        </h2>
      </div>
      <div className="Services--Cards">

{/* 1st card */}

        <card className="Services--Card1">
          <h3 className="--starter-plan-heading">Starter Plan</h3>
          <p className="text-style">$250</p>
          <h3 className="--starter-plan">$200</h3>
          <p className="Plan--P-Tag">
            Domain + Hosting
            <br />
            15GB space
            <br />
            5 Pages Website <br/>
            15 Emails
          </p>
          <button className="Plans--Button">Get Started</button>
        </card>
        {/* 2nd card */}
        <card className="Services--Card1">
          <h3 className="--starter-plan-heading">Standard Plan</h3>
          <p className="text-style">$350</p>
          <h3 className="--starter-plan">$300</h3>
          <p className="Plan--P-Tag">
            Domain + Hosting
            <br />
            25GB space
            <br />
            10 Pages Website <br/>
            30 Emails <br/>
            Front Page SEO
          </p>
          <button className="Plans--Button">Get It Now</button>
        </card>
        {/* 3rd card */}
        <card className="Services--Card1">
          <h3 className="--starter-plan-heading">Advanced Plan</h3>
          <p className="text-style">$1000</p>
          <h3 className="--starter-plan">$850</h3>
          <p className="Plan--P-Tag">
            Domain + Hosting
            <br />
            200GB space
            <br />
            Unlimited Emails
            <br />
            Graphic Designing
            <br />
            3D Animation
            <br />
            Advance SEO
          </p>
          <button className="Plans--Button">Buy Now</button>
        </card>
      </div>
    </>
  );
};
export default Services;
