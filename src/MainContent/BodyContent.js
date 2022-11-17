import React from "react";
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
            Build your website <br /> the best in the <span>SEO</span>
          </h1>
          <h2>Welcome to the Digital Impacts</h2>
          <hr />
          <span>
            Web design services comprise the process of user interface{" "}
            <span>(UI)</span>
            <br />
            and user experience <span>(UX)</span> design of any web-based
            solution. In
            <br />
            each of its web design projects, The Digital Impacts balances the
            <br />
            technology, We create Fully Responsive Website for Your Busniness.
          </span>
          <div className="read-more-button">
            <button className="message-us-button">Message Us Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
