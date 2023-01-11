import React from "react";
import aboutData from "./aboutData";
import "./about.scss";

const About = () => {
  const data = aboutData;

  return (
    <div className="about-container">
      <div className="about-top-container">
        <head className="about-head-container">
          <h1>About us</h1>
        </head>

        <div className="about-card-container">
          <div className="card">
            <div className="card-image-container">
              <img src={data[0].img} alt="" />
            </div>

            <div className="card-title-container">
              <h3>{data[0].title}</h3>
            </div>

            <div className="card-message-container">
              <span>{data[0].text}</span>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
