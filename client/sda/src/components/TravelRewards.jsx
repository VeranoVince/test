import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faClock,
  faSuitcase,
  faHeart,
} from "@fortawesome/free-solid-svg-icons"; // Import the desired icons
import "../css-assets/TravelRewards.css"; // Importing CSS file

const TravelRewards = () => {
  return (
    <div className="travel-rewards-container">
      <h1 className="travelheader">
        TAKE A BIG STEP IN YOUR CAREER! EXCEL AS A<br />
      </h1>
      <h1 className="travelsub">PREMIER FINANCIAL ADVISOR!</h1>
      <div className="boxes">
        <div className="box">
          <FontAwesomeIcon
            icon={faChartLine}
            className="icon"
            style={{ color: "#2474b4" }}
          />
          <h3>Advancement</h3>
          <p className="box-text">
            EXPLORE LIMITLESS CAREER GROWTH. GROW YOUR SKILLS WITH US!
          </p>
        </div>
        <div className="box">
          <FontAwesomeIcon
            icon={faClock}
            className="icon"
            style={{ color: "#2474b4" }}
          />
          <h3>Flexibility</h3>
          <p className="box-text">
            CONTROL YOUR OWN TIME. ENJOY A FLEXIBLE SCHEDULE!
          </p>
        </div>
        <div className="box">
          <FontAwesomeIcon
            icon={faSuitcase}
            className="icon"
            style={{ color: "#2474b4" }}
          />
          <h3>Travel Rewards</h3>
          <p className="box-text">
            GET REWARDED WITH LOCAL & INTERNATIONAL TRAVELS!
          </p>
        </div>
        <div className="box">
          <FontAwesomeIcon
            icon={faHeart}
            className="icon"
            style={{ color: "#2474b4" }}
          />
          <h3>Fulfillment</h3>
          <p className="box-text">
            BE PERSONALLY FULFILLED. SERVE A GREATER PURPOSE!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelRewards;
