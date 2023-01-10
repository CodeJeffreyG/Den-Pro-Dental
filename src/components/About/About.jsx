import React from "react";
import  aboutData  from "./aboutData";
import "./about.scss";

const About = () => {
  console.log(aboutData);

  return (
    <div className="about-container">
      <div className="about-top-container">
        <head className="about-head-container">
          <h1>About us</h1>
        </head>

        <div className="about-card-container">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
