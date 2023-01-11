import React from "react";
import "./aboutcard.scss";

const AboutCard = (props) => {
  const { img, title, text } = props;

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={img} alt="" />
      </div>

      <div className="card-title-container">
        <h3>{title}</h3>
      </div>

      <div className="card-message-container">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default AboutCard;
