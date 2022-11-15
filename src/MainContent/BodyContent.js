import React from "react";
import "./BodyContent.css";
const BodyContent = () => {
  return (
    <>
      <div className="body-content">
        <div className="body-image--container">
          <span className="body-image">
            <img src="./Logoimage/S-image.png" />
          </span>
        </div>
        <div className="second-div">
          <h1>
            DIGITAL
            <br />
            MARKETING
          </h1>
          <h2>Lorem Ipsum</h2>
          <hr />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Ut enim ad minim veniam, quis nostrud
          </span>
          <div className="read-more-button">
            <button>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default BodyContent;
