// Privacy.jsx
import React, { useEffect } from "react";
import "../css-assets/Privacy.css";

const Privacy = ({ onClose }) => {
  useEffect(() => {
    const preventScroll = (e) => {
      if (!document.querySelector(".privacy-modal").contains(e.target)) {
        e.preventDefault();
        const delta = e.deltaY || e.detail || e.wheelDelta;
        if (delta !== 0) {
          e.stopPropagation();
        }
      }
    };

    // Add event listeners to prevent scroll outside the modal
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    // Cleanup event listeners when the component is unmounted
    return () => {
      window.removeEventListener("wheel", preventScroll, { passive: false });
      window.removeEventListener("touchmove", preventScroll, {
        passive: false,
      });
    };
  }, []);

  return (
    <div className="privacy-popup" onClick={onClose}>
      <div className="privacy-modal" onClick={(e) => e.stopPropagation()}>
        <div className="privacy-content">
          <h2 className="privacy-title">Terms and Conditions</h2>
          <div className="privacy-scroll">
            <p className="privacytext" style={{ color: "black" }}>
              Welcome to Sto. Domingo Associates Agency (SDA). These terms and
              conditions outline the rules and regulations for the use of our
              website.
              <br />
              By accessing this website, we assume you accept these terms and
              conditions in full. Do not continue to use SDA's website if you do
              not accept all of the terms and conditions stated on this page.
              <br />
              <br />
              <strong>1. License to Use the Website</strong>
              <br />
              Unless otherwise stated, Sto. Domingo Associates Agency (SDA)
              and/or its licensors own the intellectual property rights for all
              material on the SDA website. All intellectual property rights are
              reserved. You may view and/or print pages from
              https://www.sda-insurance.com for your own personal use subject to
              restrictions set in these terms and conditions.
              <br />
              <strong>2. Restrictions</strong>
              <br />
              You are specifically restricted from all of the following: -
              Publishing any website material in any other media - Selling,
              sublicensing, and/or otherwise commercializing any website
              material - Publicly performing and/or showing any website material
              - Using this website in any way that is or may be damaging to this
              website - Engaging in any data mining, data harvesting, data
              extracting, or any other similar activity in relation to this
              website
              <br />
              <strong>3. Privacy Policy</strong>
              <br />
              Our Privacy Policy governs your use of our website. Please review
              our Privacy Policy to understand our practices.
              <br />
              <strong>4. Limitation of Liability</strong>
              <br />
              In no event shall Sto. Domingo Associates Agency (SDA), nor any of
              its officers, directors, and employees, be held liable for
              anything arising out of or in any way connected with your use of
              this website, whether such liability is under contract. Sto.
              Domingo Associates Agency (SDA), including its officers,
              directors, and employees, shall not be held liable for any
              indirect, consequential, or special liability arising out of or in
              any way related to your use of this website.
              <br />
              ...
              <br />
              <strong>7. Changes to Terms</strong>
              <br />
              Sto. Domingo Associates Agency (SDA) reserves the right to revise
              these terms and conditions at any time without notice. By using
              this website, you are agreeing to be bound by the then-current
              version of these terms and conditions.
            </p>
          </div>
          {/* Add more content as needed */}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Privacy;
