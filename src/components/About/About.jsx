import React from "react";
import aboutData from "./aboutData";
import AboutCard from "../AboutCard/AboutCard";
import AboutFaqCard from "../AboutFaqCard/AboutFaqCard";
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

      <div className="about-bottom-container">
        <head className="about-head-container">
          <h1>Frequently Asked Questions</h1>
        </head>

        <div className="about-card-container">
          {aboutData.map((card) => {
            return <AboutFaqCard faq={card.faq} answer={card.answer} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
