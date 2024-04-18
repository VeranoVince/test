import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import "../css-assets/ImageGallery.css";

function ImageGallery() {
  const imagePaths = ["/Images/aia.jpg"];
  const partnerLink = "https://www.aia.com.ph/en";

  return (
    <div className="image-gallery-container text-center">
      {" "}
      <h1 className="vally">
        <span className="partners">Our Partner</span>
      </h1>
      <Container fluid>
        <Row className="justify-content-center">
          {" "}
          {/* Add justify-content-center class */}
          {imagePaths.map((path, index) => (
            <Col key={index} xs={6} md={2}>
              <div className="image-wrapper">
                {/* Wrap Image component with anchor element */}
                <a href={partnerLink} target="_blank" rel="noopener noreferrer">
                  <Image src={path} rounded className="gallery-image" />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ImageGallery;
