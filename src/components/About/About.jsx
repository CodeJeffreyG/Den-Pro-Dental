import React from "react";
import aboutData from "./aboutData";
import AboutTitle from "./AboutTitle";
import AboutValues from "./AboutValues";

import "./about.scss";

const About = () => {
  const data = aboutData;

  return (
    <div className="about-container">
      <AboutTitle />
      <AboutValues />
      <AboutValues />
      <AboutValues />
      <AboutValues />
      <AboutValues />
      <AboutValues />
    </div>
  );
};

export default About;
