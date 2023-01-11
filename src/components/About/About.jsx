import React from "react";
import aboutData from "./aboutData";
import AboutCard from "../AboutCard/AboutCard";
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
          {aboutData.map((card) => {
            return (
              <AboutCard img={card.img} title={card.title} text={card.text} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
