import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css-assets/RadioButtonGroup.css"; // Update the path if necessary

const RadioButtonGroup = () => {
  const locations = [
    { name: "Makati", image: "/Images/Makati.jpg" },
    { name: "Cebu", image: "/Images/Cebu.jpg" },
    { name: "Pampanga", image: "/Images/Pampanga.jpg" },
    { name: "Bohol", image: "/Images/Bohol.jpg" },
    { name: "Dumaguete", image: "/Images/Dumaguete.jpg" },
  ];

  return (
    <Container className="radio-btns" role="radiogroup">
      <Row className="justify-content-center">
        {locations.map((location, index) => (
          <Col key={index} className="text-center">
            <Link to={`/organization?tab=${location.name}`}>
              <div
                className="radio-btns__btn"
                role="radio"
                aria-checked="false"
                tabIndex="-1"
                aria-label={`Select ${location.name}`}
              >
                <div className="image-container">
                  <Image
                    className="radio-btns__img"
                    src={location.image}
                    alt={location.name}
                    fluid
                  />
                  <div className="RadioText">
                    <h1>{location.name}</h1>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RadioButtonGroup;
