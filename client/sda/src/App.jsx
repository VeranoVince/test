import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import HomePage from "./pages/Homepage";
import NavScroll from "./components/NavScroll";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Blogpage from "./pages/Blogpage";
import Newspage from "./pages/Newspage";
import ContactUsPage from "./pages/ContactUsPage";
import OrganizationPage from "./pages/OrganizationPage";

function App() {
  return (
    <MantineProvider>
      <div className="App">
        {/* ScrollToTop component placed here */}

        <Router>
          <NavScroll />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog" element={<Blogpage />} />
            <Route path="/news" element={<Newspage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/organization" element={<OrganizationPage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </MantineProvider>
  );
}

export default App;
