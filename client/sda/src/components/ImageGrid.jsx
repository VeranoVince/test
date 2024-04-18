import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../css-assets/ImageGrid.css";

function ImageGrid() {
  return (
    <div style={{ marginTop: "10%" }} className="news-media-container">
      <h1 className="NewsMedia">News & Media</h1>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Link to="/news">
              <img
                src="/announcement-1/ad1.jpg"
                alt="Image 1"
                className="ClickableImage FirstImage"
              />
            </Link>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Row className="image-row">
              <Col xs={6} md={6} lg={6}>
                <Link to="/news">
                  <img
                    src="/Images/Trash/SDAHEADER.png"
                    alt="Image 4"
                    className="ClickableImage"
                  />
                </Link>
              </Col>
              <Col xs={6} md={6} lg={6}>
                <Link to="/news">
                  <img
                    src="/Images/Trash/SDAHEADER.png"
                    alt="Image 5"
                    className="ClickableImage"
                  />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} lg={12} style={{ marginLeft: "-20px" }}>
                {" "}
                {/* Added margin-right */}
                <Link to="/news">
                  <img
                    src="/Images/Trash/OrganizationHeaderwithPepot.png"
                    alt="Image 8"
                    className="ClickableImage"
                  />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="text-end">
            <button className="ReadMore">
              <Link to="/news-page">Read More</Link>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ImageGrid;
