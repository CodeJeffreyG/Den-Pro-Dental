import React from "react";
import aboutData from "./aboutData";
import HexagonIcon from "@mui/icons-material/Hexagon";

import "./about.scss";

const About = () => {
  const data = aboutData;

  return (
    <div className="about-container">
      <head className="about-title-container">
        <p>our</p>
        <h2>Values</h2>
      </head>
      <div className="value-container">
        <div className="value-icon-container">
          <HexagonIcon sx={{ fontSize: 120, color: "#FFFFFF" }}></HexagonIcon>
        </div>
      </div>
      <div className="value-container"></div>
      <div className="value-container"></div>
      <div className="value-container"></div>
      <div className="value-container"></div>
      <div className="value-container"></div>
    </div>
  );
};

export default About;
