import React from "react";
import Contact from "../components/Contact";
import "../css-assets/ContactUs.css";
import { Image, Container, Row, Col, Button } from "react-bootstrap";

function ContactUsPage() {
  return (
    <>
      <div className="contact-us-container">
        <Container fluid>
          <Row>
            <Col xs={10} md={6}>
              <h1 className="h1-cc">Contact Us: (+63) 17 800 9303</h1>
              <p className="p-email">stodomingoassociates@gmail.com</p>
            </Col>
            <Col xs={10} md={6}>
              <div class="cloud-card">
                <div class="cloud" />
                <h2 className="h2-cc">Working Hours</h2>
                <li>Mon-Fri: 8AM - 5PM</li>

                <div class="shadow"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Row className="center-cols">
            <Col
              xs={10}
              md={5}
              style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
            >
              <Contact />
              <br />
            </Col>
            <Col
              xs={10}
              md={5}
              style={{
                backgroundColor: "#F0F8FF",
                padding: "15px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Col></Col>
              <Col></Col>

              <h3 className="h3-cc">Locate Us</h3>
              <br />
              <div className="ul-branch-location">
                <ul>
                  <li className="custom-li">
                    Makati City |
                    <Button
                      className="direction-button"
                      variant="link"
                      href="https://www.bing.com/maps?where=Leviste+Street%2C+9%2FF+Philam+Salcedo+Building%2C+Makati+City%2C+NCR++1200%2C+PH&cp=14.556693%7E121.021413&lvl=14.4"
                      target="_blank"
                    >
                      Direction
                    </Button>
                  </li>

                  <li className="custom-li">
                    Pampanga |
                    <Button
                      className="direction-button"
                      variant="link"
                      href="https://www.bing.com/maps?where=Jose%20Abad%20Santos%20Avenue%20(OG%20Road)%2C%202%2FF%20Kingsborough%20Building%2C%20San%20Fernando%2C%20Pampanga%202000%2C%20PH"
                      target="_blank"
                    >
                      Direction
                    </Button>
                  </li>

                  <li className="custom-li">
                    Cebu City |
                    <Button
                      className="direction-button"
                      variant="link"
                      href="https://www.bing.com/maps?where=Cardinal%20Rosales%20Ave%2C%2012%2FF%20Philam%20Life%20Center%20Cebu%2C%20Cebu%2C%20Central%20Visayas%206000%2C%20PH"
                      target="_blank"
                    >
                      Direction
                    </Button>
                  </li>
                  <li className="custom-li">
                    Tagbilaran |
                    <Button
                      className="direction-button"
                      variant="link"
                      href="https://www.bing.com/maps?where=Gallares+Street+corner+JS+Torralba+Street%2C+2%2FF+Tagbilaran+Agency+Office%2C+Castel+Celo+Building%2C+Tagbilaran+City%2C+Bohol+6300%2C+PH&cp=9.649711%7E123.85969&lvl=17.3"
                      target="_blank"
                    >
                      Direction
                    </Button>
                  </li>
                  <li className="custom-li">
                    Dumaguete |
                    <Button
                      className="direction-button"
                      variant="link"
                      href="https://www.bing.com/maps?where=Siliman%20Avenue%20corner%20Real%20Street%2C%20Dumaguete%20Agency%20Office%2C%20Philamlife%20Building%2C%20Dumaguete%20City%2C%20Negros%20Oriental%206200%2C%20PH"
                      target="_blank"
                    >
                      Direction
                    </Button>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactUsPage;
