import React from "react";
import "../css-assets/RectImg.css";

function RectImg() {
  return (
    <div className="rect-container">
      <div className="rect-image">
        <img
          src="/Images/Building.png"
          alt="Building"
          style={{ "--color": "#2474b4" }}
        />
      </div>
      <div className="rect-text">
        <h1 className="Largest">
          <span className="highlight-text">Sto.Domingo Associates</span>
          <br />
          is one of the largest <br />
          agencies in <br />
          AIA Philippines.
        </h1>
      </div>
    </div>
  );
}

export default RectImg;
