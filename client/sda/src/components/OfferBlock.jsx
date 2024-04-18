import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../css-assets/OfferBlock.css";

const OfferBlockComponent = styled.div`
  margin-top: 5%;
  padding: 50px 0 90px;
  background-color: #caebfc; /* Setting container color to white */
`;

const FormatContainer = styled.div`
  width: 90%; /* Adjusted width for responsiveness */
  margin: 0 auto;
  max-width: 1142px; /* Maximum width */
`;

const OfferList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const OfferItem = styled.li`
  width: calc(25% - 1px); /* Adjusted width for four items in a row */
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  padding-bottom: 40px; /* Adjusted for spacing between items */
  transition: all 0.3s ease;

  &:nth-child(4n) {
    border-right: none;
  }

  &:not(:nth-child(-n + 4)) {
    border-top: none;
  }

  .ag-offer_visible-item {
    position: relative;
    z-index: 1; /* Ensure icon is above description */
  }

  .ag-offer_img-box {
    display: flex;
    align-items: center; /* Align icons vertically center */
    justify-content: center; /* Align icons horizontally center */
  }

  .ag-offer_img {
    transition: opacity 0.3s ease; /* Adjusted transition */
    height: 64px;
    width: 64px;
  }

  &:hover .ag-offer_hidden-item {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }

  &:hover .ag-offer_img,
  &:hover .ag-offer_title {
    opacity: 0; /* Fading out the icon and title */
  }
`;

const OfferVisibleItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column; /* Center the icon and title vertically */
  padding: 35px 40px;
  box-sizing: border-box;
`;

const OfferImg = styled.img`
  max-width: 100%; /* Ensure images scale proportionally without cropping */
  height: auto; /* Automatically adjust height to maintain aspect ratio */
  margin-bottom: 15px; /* Add space between icon and title */

  @media (max-width: 768px) {
    height: 48px; /* Adjust height for smaller screens */
    width: 48px; /* Adjust width for smaller screens */
  }

  @media (max-width: 540px) {
    height: 14px; /* Adjust height for smaller screens */
    width: 14px; /* Adjust width for smaller screens */
  }

  @media (max-width: 480px) {
    height: 32px; /* Adjust height for smaller screens */
    width: 32px; /* Adjust width for smaller screens */
  }
`;

const OfferTitle = styled.div`
  transition: opacity 0.3s ease;
  text-align: center;
`;

const OfferHiddenItem = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: rotate(180deg) scale(0);
  transition: opacity 0.3s ease, transform 0.3s ease; /* Adjusted transitions */
  z-index: 2; /* Ensure description is above icon */
`;

const OfferText = styled.p`
  margin: 0;
`;

function OfferBlock() {
  return (
    <OfferBlockComponent className="ag-offer-block">
      <FormatContainer className="ag-format-container">
        <h1 className="HomeVision">Visions of Sto.Domingo Associates</h1>
        <p className="HomeStatement">
          Dedicated to creating a future where everyone feels empowered and
          secure, knowing they have a trusted ally supporting their journey
          towards success and peace of mind.
        </p>
        <OfferList className="ag-offer_list">
          <OfferItem className="ag-offer_item">
            <div className="ag-offer_visible-item">
              <div className="ag-offer_img-box">
                <OfferImg
                  src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/tasks.svg"
                  className="ag-offer_img"
                  alt=""
                />
              </div>
              <OfferTitle className="ag-offer_title">
                Highly Productive Team
              </OfferTitle>
            </div>
            <OfferHiddenItem className="ag-offer_hidden-item">
              <OfferText className="ag-offer_text">
                Achieves goals efficiently through effective collaboration and
                resource utilization.
              </OfferText>
            </OfferHiddenItem>
          </OfferItem>
          {/* Add other offer items similarly */}
          <OfferItem className="ag-offer_item">
            <div className="ag-offer_visible-item">
              <div className="ag-offer_img-box">
                <OfferImg
                  src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/lightbulb.svg"
                  className="ag-offer_img"
                  alt=""
                />
              </div>
              <OfferTitle className="ag-offer_title">
                Energized and Inspired
              </OfferTitle>
            </div>
            <OfferHiddenItem className="ag-offer_hidden-item">
              <OfferText className="ag-offer_text">
                Motivated individuals who approach tasks with enthusiasm and
                creativity.
              </OfferText>
            </OfferHiddenItem>
          </OfferItem>
          <OfferItem className="ag-offer_item">
            <div className="ag-offer_visible-item">
              <div className="ag-offer_img-box">
                <OfferImg
                  src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/laptop-code.svg"
                  className="ag-offer_img"
                  alt=""
                />
              </div>
              <OfferTitle className="ag-offer_title">
                Professionally Competent
              </OfferTitle>
            </div>
            <OfferHiddenItem className="ag-offer_hidden-item">
              <OfferText className="ag-offer_text">
                Skilled experts who deliver high-quality work through continuous
                learning and development.
              </OfferText>
            </OfferHiddenItem>
          </OfferItem>
          {/* Add one more item to the same row */}
          <OfferItem className="ag-offer_item">
            <div className="ag-offer_visible-item">
              <div className="ag-offer_img-box">
                <OfferImg
                  src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/briefcase.svg"
                  className="ag-offer_img"
                  alt=""
                />
              </div>
              <OfferTitle className="ag-offer_title">
                Fulltime Advisors
              </OfferTitle>
            </div>
            <OfferHiddenItem className="ag-offer_hidden-item">
              <OfferText className="ag-offer_text">
                Dedicated professionals offering consistent and reliable
                guidance to clients on a full-time basis.
              </OfferText>
            </OfferHiddenItem>
          </OfferItem>
        </OfferList>
        <div className="KnowMoreContainer">
          <h4 className="KnowMore">Want to know more about us?</h4>{" "}
          <Link to="/about-us" className="OfferButton">
            Click here
          </Link>
        </div>
      </FormatContainer>
    </OfferBlockComponent>
  );
}

export default OfferBlock;
