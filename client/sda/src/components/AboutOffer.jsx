import React from "react";
import styled from "styled-components";
import "../css-assets/AboutOffer.css";

const OfferBlockStyled = styled.div`
  margin-top: 5%;
  padding: 50px 0 90px;
`;

const FormatContainerStyled = styled.div`
  width: 90%; /* Adjusted width for responsiveness */
  margin: 0 auto;
  max-width: 1142px; /* Maximum width */
`;

const OfferListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const OfferItemStyled = styled.li`
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

  .offer-visible-item {
    position: relative;
    z-index: 1; /* Ensure icon is above description */
  }

  .offer-img-box {
    display: flex;
    align-items: center; /* Align icons vertically center */
    justify-content: center; /* Align icons horizontally center */
  }

  .offer-img {
    transition: opacity 0.3s ease; /* Adjusted transition */
    height: 64px;
    width: 64px;
  }

  &:hover .offer-hidden-item {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }

  &:hover .offer-img,
  &:hover .offer-title {
    opacity: 0; /* Fading out the icon and title */
  }
`;

const OfferVisibleItemStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column; /* Center the icon and title vertically */
  padding: 35px 40px;
  box-sizing: border-box;
`;

const OfferImgStyled = styled.img`
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

const OfferTitleStyled = styled.div`
  transition: opacity 0.3s ease;
  text-align: center;
`;

const OfferHiddenItemStyled = styled.div`
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

const OfferTextStyled = styled.p`
  margin: 0;
`;

function AboutOffer() {
  return (
    <OfferBlockStyled className="custom-offer-block">
      <FormatContainerStyled className="custom-format-container">
        <h1 className="HomeVision">Visions of Sto.Domingo Associates</h1>
        <p className="HomeStatement">
          Dedicated to creating a future where everyone feels empowered and
          secure, knowing they have a trusted ally supporting their journey
          towards success and peace of mind.
        </p>
        <OfferListStyled className="custom-offer-list">
          <OfferItemStyled className="custom-offer-item">
            <div className="offer-visible-item">
              <div className="offer-img-box">
                <OfferImgStyled
                  src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/tasks.svg"
                  className="offer-img"
                  alt=""
                />
              </div>
              <OfferTitleStyled className="offer-title">
                Highly Productive Team
              </OfferTitleStyled>
            </div>
            <OfferHiddenItemStyled className="offer-hidden-item">
              <OfferTextStyled className="voffer-text">
                Achieves goals efficiently through effective collaboration and
                resource utilization.
              </OfferTextStyled>
            </OfferHiddenItemStyled>
          </OfferItemStyled>
          {/* Add other offer items similarly */}
          <OfferItemStyled className="custom-offer-item">
            <div className="offer-visible-item">
              <div className="offer-img-box">
                <OfferImgStyled
                  src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/lightbulb.svg"
                  className="offer-img"
                  alt=""
                />
              </div>
              <OfferTitleStyled className="offer-title">
                Energized and Inspired
              </OfferTitleStyled>
            </div>
            <OfferHiddenItemStyled className="offer-hidden-item">
              <OfferTextStyled className="voffer-text">
                Motivated individuals who approach tasks with enthusiasm and
                creativity.
              </OfferTextStyled>
            </OfferHiddenItemStyled>
          </OfferItemStyled>
          <OfferItemStyled className="custom-offer-item">
            <div className="offer-visible-item">
              <div className="offer-img-box">
                <OfferImgStyled
                  src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/laptop-code.svg"
                  className="offer-img"
                  alt=""
                />
              </div>
              <OfferTitleStyled className="offer-title">
                Professionally Competent
              </OfferTitleStyled>
            </div>
            <OfferHiddenItemStyled className="offer-hidden-item">
              <OfferTextStyled className="voffer-text">
                Skilled experts who deliver high-quality work through continuous
                learning and development.
              </OfferTextStyled>
            </OfferHiddenItemStyled>
          </OfferItemStyled>
          {/* Add one more item to the same row */}
          <OfferItemStyled className="custom-offer-item">
            <div className="offer-visible-item">
              <div className="offer-img-box">
                <OfferImgStyled
                  src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/briefcase.svg"
                  className="offer-img"
                  alt=""
                />
              </div>
              <OfferTitleStyled className="offer-title">
                Fulltime Advisors
              </OfferTitleStyled>
            </div>
            <OfferHiddenItemStyled className="offer-hidden-item">
              <OfferTextStyled className="voffer-text">
                Dedicated professionals offering consistent and reliable
                guidance to clients on a full-time basis.
              </OfferTextStyled>
            </OfferHiddenItemStyled>
          </OfferItemStyled>
        </OfferListStyled>
      </FormatContainerStyled>
    </OfferBlockStyled>
  );
}

export default AboutOffer;
