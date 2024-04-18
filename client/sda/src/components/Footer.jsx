import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Privacy from "./Privacy";
import "../css-assets/Footer.css";

function Footer() {
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);

  const openPrivacyPopup = (e) => {
    e.preventDefault(); // Prevents the default behavior of the link
    setShowPrivacyPopup(true);
  };

  const closePrivacyPopup = () => {
    setShowPrivacyPopup(false);
  };

  return (
    <footer className="footer">
      <div className="separator"></div>
      <br />
      <Container>
        <Row>
          <Col>
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="/news" className="FooterLinks">
                  Blog
                </a>
              </li>
              <li>
                <a href="/news" className="FooterLinks">
                  News
                </a>
              </li>
              <li>
                <a href="/about-us" className="FooterLinks">
                  About us
                </a>
              </li>
              {/* Add other links as needed */}
            </ul>
          </Col>
          <Col>
            <h5>Privacy Policy</h5>
            <ul>
              <li>
                <a
                  href="/privacy"
                  className="FooterLinks"
                  onClick={openPrivacyPopup}
                >
                  Terms and Condition
                </a>
              </li>
              <li>
                <a href="/contact-us" className="FooterLinks">
                  Branch Locator
                </a>
              </li>
              <li>
                <a href="/organization" className="FooterLinks">
                  Organization
                </a>
              </li>
              {/* Add other links as needed */}
            </ul>
          </Col>

          <Col>
            <h5>Contact Information</h5>
            <p>Email: stodomingoassociates@gmail.com</p>
            <p>Landline: (+63) 17 800 9303</p>
            <p>Smart: (+63) 17 800 9303</p>
            <p>Globe: (+63) 17 800 9303</p>
          </Col>
          <Col>
            <h5>Address</h5>
            <p>Leviste Street, 9/F Philam Salcedo Building</p>
            <p>Makati City, NCR 1200, Philippines</p>
          </Col>
        </Row>
        <Row>
          <Col className="social-icons">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/SDAFinancialAdvisors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/company/stodomingoassociates/about/?fbclid=IwAR0_03-7ES3Ls_e30WHtbHiF0WxDl6OZiF2ccjDp8aGviNTh3jNPxkgIxCY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Col>
        </Row>
      </Container>

      {/* Privacy Popup */}
      {showPrivacyPopup && <Privacy onClose={closePrivacyPopup} />}
    </footer>
  );
}

export default Footer;
