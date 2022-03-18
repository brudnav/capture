import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dream</span>
            </h2>
          </div>
          <div className="hide">
            <h2>come true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have.
        </p>
        <p>We have professionals with amazing skills to help you achieve it.</p>
        <button>Contact Us</button>
      </div>
      <div className="image-container">
        <img src={home1} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
