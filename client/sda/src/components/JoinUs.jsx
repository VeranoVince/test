import React from "react";
import { useNavigate } from "react-router-dom";
import "../css-assets/JoinUs.css";

const JoinUs = () => {
  const navigate = useNavigate();

  const handleApplyNowClick = () => {
    // Redirect to the "/about-us" page
    navigate("/contact-us");
  };

  return (
    <div className="join-us-container">
      <div className="join-us-text">
        <p>WANT TO JOIN OUR TEAM?</p>
        <h4 className="belowjoin">
          JOIN US IN SHAPING THE FUTURE OF STO.DOMINGO COMPANY!
        </h4>
      </div>
      <button className="apply-now-button" onClick={handleApplyNowClick}>
        Apply Now
      </button>
    </div>
  );
};

export default JoinUs;
