import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaGraduationCap,
  FaStar,
  FaEnvelope,
  FaCamera,
  FaFilm,
} from "react-icons/fa";

import "../css-assets/Vtimeline.css";

function Vtimeline() {
  return (
    <div className="viti">
      <VerticalTimeline lineColor="#2474b4">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#31a0f7", color: "#fff" }}
          icon={<FaEnvelope />}
          date="2018"
          dateClassName="custom-date"
        >
          <h3>Top District in 2018 </h3>
          <p>in terms of Annualized New Premium (ANP)</p>
          <img src="/Images/ANP.png" alt="Event Image" className="full-image" />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#31a0f7", color: "#fff" }}
          icon={<FaCamera />}
          date="2018"
          dateClassName="custom-date"
        >
          <h3>Top District in 2018</h3>
          <p>in terms of MDRTs (Million Dollar Round Table)</p>
          <img
            src="/Images/MDRTS1.png"
            alt="Event Image"
            className="full-image"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#31a0f7", color: "#fff" }}
          icon={<FaStar />}
          date="2017"
          dateClassName="custom-date"
        >
          <h3>SDA is National Champion</h3>
          <p>District Category, Philamlife 70th Anniversary Cup Challenge</p>
          <img
            src="/Images/NationalChampion.png"
            alt="Event Image"
            className="full-image"
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#31a0f7", color: "#fff" }}
          icon={<FaFilm />}
          date="2017"
          dateClassName="custom-date"
        >
          <h3>SDA is PhilamLife Top District</h3>
          <p>in Number of Early MDRT Qualifiers for 1H FY</p>
          <img
            src="/Images/TopDistrict.png"
            alt="Event Image"
            className="full-image"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#31a0f7", color: "#fff" }}
          icon={<FaGraduationCap />}
          date="2005"
          dateClassName="custom-date"
        >
          <h3>Established in 2005</h3>
          <p>By Mgr. Josefino "Pepot" Sto. Domingo</p>
          <img
            src="/Images/Founder.png"
            alt="Pepot Sto. Domingo with his wife"
            className="full-image"
          />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Vtimeline;
