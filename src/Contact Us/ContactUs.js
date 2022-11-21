import React from "react";
import "./ContactUs.css";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const ContactUs = () => {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Submitted");
  }
  return (
    <>
      {/* services */}
      <div className="heading">
        <h2 className="Services-heading">
          Feel Free To <span>Contact</span> Us By Submitting
          <br />
          <span>Form Or Contact Live Support</span>
        </h2>
      </div>
      <div className="Form">
        <div class="mapouter">
          <iframe
            height="350px"
            width="700px"
            class="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Oldham Graham, Manchester UK&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <div className="contact-numbers">
            <div>
              <h2>
                <FaPhoneSquareAlt />
              </h2>
            </div>
            <div>
              <h4>+447424997026</h4>
              <h4>+447900190002</h4>
            </div>
            <div>
              <h2>
                <IoMdMail />
              </h2>
            </div>
            <div className="ContactUs---Email">
              <h4>info@thedigitalimpacts.com</h4>
            </div>
          </div>
        </div>
        <card className="Form--Card">
          <form onSubmit={handleSubmit}>
            <label for="name">Name </label> <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="your name"
              required
            />
            <br />
            <label for="sname">Surname </label>
            <br />
            <input
              type="text"
              id="sname"
              name="sname"
              placeholder="your surname"
            />
            <br />
            <label for="email">Email </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your email address"
              required
            />
            <br />
            <label for="fname">Contact Number </label>
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="123-45-678"
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="form-submit-button"
            />
            <br />
          </form>
        </card>
      </div>
    </>
  );
};
export default ContactUs;
