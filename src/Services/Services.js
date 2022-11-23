import React from "react";
import "./Services.css";
import { GiOpeningShell } from "react-icons/gi";
import { AiOutlineRocket } from "react-icons/ai";
import { GiBulletImpacts } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { CgFilm } from "react-icons/cg";
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
        {/* Digital Marketing */}
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
        {/* Web Development */}
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

        {/* Graphic Designing */}
        <card className="Services--Card1">
          <h3>Graphic Designing</h3>
          <h2>
            <CgFilm />
          </h2>
          <p className="ServicesCard--P-Tag">
            Create visual concepts to communicate ideas that inspire and
            captivate consumers.creative thinking, an aptitude
            towards art and design
          </p>
        </card>
      </div>
      <div className="Services--Cards">
        {/* Content Writter */}
        <card className="Services--Card1">
          <h3>Content Writter</h3>
          <h2>
            <TfiWrite />
          </h2>
          <p className="ServicesCard--P-Tag">
            That <span>content</span> can include blog posts, video or podcast
            scripts, ebooks or whitepapers, press releases, product category
            descriptions, landing page or social media
          </p>
        </card>
        {/* SEO */}
        <card className="Services--Card1">
          <h3>SEO</h3>
          <h2>
            <GiOpeningShell />
          </h2>
          <p className="ServicesCard--P-Tag">
            Help search engines find, crawl, and index your content efficiently.
            Website can become easily findable, more relevant and popular
            towards user search querie.
          </p>
        </card>
      </div>

      {/* Industries */}

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
