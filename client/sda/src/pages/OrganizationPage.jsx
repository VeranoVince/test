import React from "react";
import SdaChart from "../components/SdaChart";
import JoinUs from "../components/JoinUs";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css-assets/Org.css";

function OrganizationPage() {
  return (
    <div className="Org">
      <div className="orgfam">
        <img
          src="/Images/OrganizationHeader.png"
          alt="Sto. Domingo Family"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
      <SdaChart />
      <JoinUs />
    </div>
  );
}

export default OrganizationPage;
