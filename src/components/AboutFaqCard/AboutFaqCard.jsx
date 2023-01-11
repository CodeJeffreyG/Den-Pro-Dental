import React from "react";
import "./aboutfaqcard.scss";

const FaqCard = (props) => {
  const { faq, answer } = props;
  return (
    <div className="faq-card">
      <div className="card-title-container">
        <h3>{faq}</h3>
      </div>

      <div className="card-message-container">
        <span>{answer}</span>
      </div>
    </div>
  );
};

export default FaqCard;
