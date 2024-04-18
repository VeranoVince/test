import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import StatsGroup from "../components/StatsGroup";
import RectImg from "../components/RectImg";
import ImageGrid from "../components/ImageGrid";
import ImageGallery from "../components/ImageGallery";
import OfferBlock from "../components/OfferBlock";
import RadioButtonGroup from "../components/RadioButtonGroup";
import TravelRewards from "../components/TravelRewards";
import "../css-assets/Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  const navigate = useNavigate();
  const [imageDimensions, setImageDimensions] = useState({
    width: "100%",
    height: "auto",
  });

  const calculateImageDimensions = () => {
    let width = "100%";
    let height = "auto";

    if (window.innerWidth >= 768) {
      // For devices with width >= 768px, adjust the image dimensions
      width = "100%"; // Adjust the width as needed
      height = "auto";
    }

    return {
      width,
      height,
      objectFit: "cover",
    };
  };

  useEffect(() => {
    const img = new Image();
    img.src = "/FHeader.png";
    img.onload = () => {
      const dimensions = calculateImageDimensions(
        img.naturalWidth,
        img.naturalHeight
      );
      setImageDimensions(dimensions);
    };
  }, []);

  return (
    <MantineProvider>
      <div>
        <div className="stats-container">
          <StatsGroup />
        </div>
        <img
          src="/Images/HomepageHeader.png"
          alt="Header Image"
          style={imageDimensions}
          className="header-image"
        />

        <RectImg />
        <OfferBlock />
        <TravelRewards />
        <h1 className="investment-benefits-title">
          JOIN ONE OF OUR MANY EXPANSIONS ACROSS THE COUNTRY!
        </h1>
        <RadioButtonGroup />
        <ImageGrid />
        <ImageGallery />
      </div>
    </MantineProvider>
  );
}
