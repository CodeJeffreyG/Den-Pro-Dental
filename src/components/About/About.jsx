import React from "react";
import aboutData from "./aboutData";
import AboutCard from "../AboutCard/AboutCard";
import "./about.scss";

const About = () => {
  const data = aboutData;

  return (
    <div className="about-container">
      <div className="about-card-container">
        {aboutData.map((card) => {
          return (
            <AboutCard img={card.img} title={card.title} text={card.text} />
          );
        })}
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
        mollitia itaque ullam distinctio eligendi sequi perferendis magni ipsam
        veritatis! Tempore, soluta dicta. Quia quos quis recusandae, repellendus
        at nemo magnam.
      </p>
    </div>
  );
};

export default About;
