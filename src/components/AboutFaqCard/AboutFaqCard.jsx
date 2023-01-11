import React from "react";
import "./aboutfaqcard.scss";

const FaqCard = (props) => {
  const { faq, answer } = props;
  return (


    // <div className="about-bottom-container">
    //     <head className="about-head-container">
    //       <h1>Frequently Asked Questions</h1>
    //       <h2>
    //         Please reach us at denprodental@comcast.net if you have any
    //         additional questions. Thank you!
    //       </h2>
    //     </head>

    //     <div className="about-card-container">
    //       {aboutData.map((card) => {
    //         return <AboutFaqCard faq={card.faq} answer={card.answer} />;
    //       })}
    //     </div>
    //   </div>
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
