import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import AboutOffer from "../components/AboutOffer";
import Vtimeline from "../components/Vtimeline";
import "../css-assets/AboutUs.css";

function AboutUs() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollButton(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const items = [
    {
      title: "Present",
      cardTitle: "Event 1",
      cardSubtitle: "Event 1 Subtitle",
      cardDetailedText: "This is the first event on the timeline.",
    },
    {
      title: "2022",
      cardTitle: "Event 2",
      cardSubtitle: "Event 2 Subtitle",
      cardDetailedText: "This is the second event on the timeline.",
    },
    // ... (existing timeline items)
    {
      title: "2019",
      cardTitle: "Tribute to outgoing PhilamLife President Aibee Cantos",
      cardSubtitle: "Event 3 Subtitle",
      cardDetailedText: (
        <>
          <p>This is the third event on the timeline.</p>
          <div className="full-image-container" id="fullImageContainer">
            <img src="/h1.png" alt="Event Image" className="full-image" />
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="about-us-container">
      <div className="about-us-image-container">
        <Image
          src="/Images/AboutUsHeader.png"
          fluid
          alt="About Us Image"
          className="about-us-image"
        />
      </div>
      <h1 className="ally">ABOUT STO.DOMINGO ASSOCIATES</h1>
      <div className="two-columns">
        <div className="first-paragraph-image">
          <Image
            src="/Images/AboutUsMakati.png"
            fluid
            alt="About Us Makati"
            className="aboutmakati"
            style={{ maxWidth: "700px", maxHeight: "400px" }}
          />
        </div>
        <p className="second-paragraph">
          Our collective aim is to cater to the diverse financial needs of the
          Filipino Market through a comprehensive range of products and services
          offered by Philam Life. SDA aspires to cultivate a new generation of
          proficient financial advisors dedicated to delivering tailored
          solutions for the financial protection and security of Filipino
          families.
        </p>
      </div>
      <div className="philam-life-info">
        <h2 className="aboutp">Discover Philam Life - Your Trusted Partner</h2>
        <p className="aboutphil">
          Philam Life, recognized as the country’s premier life insurance
          company, manages PHP251.4 billion in total assets as of December 31,
          2017. Serving nearly 600,000 individual policyholders and over
          2,200,000 insured group members, Philam Life exemplifies excellence in
          the insurance industry.
        </p>
        <p className="aboutphil">
          Philam Life is attuned to the evolving needs of its customers,
          providing holistic solutions that encompass life protection, health
          insurance, savings, education, retirement, group, and credit life
          insurance. The company goes beyond by offering bancassurance and fund
          management products and services through its subsidiaries - BPI Philam
          Life Assurance Company (BPLAC) and Philam Asset Management Inc.
          (PAMI).
        </p>
        <p className="aboutphil">
          As a proud member of AIA Group Limited, the largest independent
          publicly-listed pan-Asian life insurance group, Philam Life remains
          steadfast in its commitment to securing the future of every Filipino.
        </p>
        <AboutOffer />
      </div>
      <h1 className="hally text-center">History</h1>
      {/*<Chrono
        items={items}
        mode="HORIZONTAL"
        slideShow
        slideShowDuration={3000}
      />*/}
      <Vtimeline />
      {showScrollButton && (
        <div className="scroll-top-button-history" onClick={handleScrollTop}>
          Scroll to Top
        </div>
      )}
    </div>
  );
}

export default AboutUs;
