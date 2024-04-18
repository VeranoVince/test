import { Nav, Tab, Container, Image } from "react-bootstrap";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import CircleSlider from "./CircleSlider";
import "../css-assets/SdaChart.css";

function SdaChart() {
  const [branchManagerAccordionExpanded, setBranchManagerAccordionExpanded] =
    useState(false);
  const [branchHeadAccordionExpanded, setBranchHeadAccordionExpanded] =
    useState(false);

  const handleBranchManagerAccordionChange = (event, isExpanded) => {
    setBranchManagerAccordionExpanded(isExpanded);
    if (isExpanded) {
      setBranchHeadAccordionExpanded(false);
    }
  };

  const handleBranchHeadAccordionChange = (event, isExpanded) => {
    setBranchHeadAccordionExpanded(isExpanded);
    if (isExpanded) {
      setBranchManagerAccordionExpanded(false);
    }
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const activeTab = queryParams.get("tab") || "Makati";

  return (
    <div className="team-tab-container">
      <Image src="/Images/Founder.png" className="founder-image" />
      <h1 className="founder-content">Josefino Sto. Domingo</h1>
      <p
        className="founder-content"
        style={{ fontSize: "24px", fontWeight: "bold" }}
      >
        FOUNDER
      </p>
      <Tab.Container id="team-tab-example" defaultActiveKey={activeTab}>
        <Nav fill variant="underline" className="custom-nav">
          <Nav.Item>
            <Nav.Link eventKey="Makati" className="custom-nav-link">
              Makati
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Cebu" className="custom-nav-link">
              Cebu
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Pampanga" className="custom-nav-link">
              Pampanga
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Bohol" className="custom-nav-link">
              Bohol
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Dumaguete" className="custom-nav-link">
              Dumaguete
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="Makati">
            <Container>
              <div className="profile-container">
                <div className="profile-picture">
                  <Image
                    src="MembersCebu/Male.png"
                    alt="Your Picture"
                    className="profile-image"
                    roundedCircle
                  />
                </div>
                <div className="profile-content">
                  <h1 className="profile-title">Branch Head of Makati</h1>
                  <p className="profile-description">Branch Manager</p>
                  <Accordion
                    className="custom-accordion"
                    expanded={branchManagerAccordionExpanded}
                    onChange={handleBranchManagerAccordionChange}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="branch-manager-content"
                      id="branch-manager-header"
                    >
                      View biography
                    </AccordionSummary>
                    <AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              {branchManagerAccordionExpanded && (
                <CircleSlider branch="Makati" />
              )}
              <div className="profile-container">
                <div className="profile-picture">
                  <Image
                    src="MembersCebu/Female.png"
                    alt="Portia Sto.Domingo"
                    className="profile-image"
                    roundedCircle
                  />
                </div>
                <div className="profile-content">
                  <h1 className="profile-title">Branch Head of Makati</h1>
                  <p className="profile-description">Branch Manager</p>
                  <Accordion
                    className="custom-accordion"
                    expanded={branchHeadAccordionExpanded}
                    onChange={handleBranchHeadAccordionChange}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="branch-head-content"
                      id="branch-head-header"
                    >
                      View biography
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* Biography content */}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              {branchHeadAccordionExpanded && <CircleSlider branch="Makati" />}
            </Container>
          </Tab.Pane>
          <Tab.Pane eventKey="Cebu">
            <Container>
              <div className="profile-container">
                <div className="profile-picture">
                  <Image
                    src="MembersCebu/Debbie Apuya-Cabrales- Admin.png"
                    alt="Your Picture"
                    className="profile-image"
                    roundedCircle
                  />
                </div>
                <div className="profile-content">
                  <h1 className="profile-title">Debbie Apuya-Cabrales</h1>
                  <p className="profile-description">Branch Head</p>
                  <Accordion
                    className="custom-accordion"
                    expanded={branchManagerAccordionExpanded}
                    onChange={handleBranchManagerAccordionChange}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="branch-manager-content"
                      id="branch-manager-header"
                    >
                      View biography
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* Biography content */}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              {branchManagerAccordionExpanded && <CircleSlider branch="Cebu" />}
              {/* Profile Container for Branch Manager */}
              <div className="profile-container">
                <div className="profile-picture">
                  <Image
                    src="MembersCebu/JP Cabrales.png"
                    alt="Your Picture"
                    className="profile-image"
                    roundedCircle
                  />
                </div>
                <div className="profile-content">
                  <h1 className="profile-title">JP Cabrales</h1>
                  <p className="profile-description">Branch Manager</p>
                  <Accordion
                    className="custom-accordion"
                    expanded={branchHeadAccordionExpanded}
                    onChange={handleBranchHeadAccordionChange}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="branch-head-content"
                      id="branch-head-header"
                    >
                      View biography
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* Biography content */}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              {branchHeadAccordionExpanded && <CircleSlider branch="Cebu" />}
            </Container>
          </Tab.Pane>
          <Tab.Pane eventKey="Pampanga">
            <Container>
              <div className="profile-container">
                <div className="profile-picture">
                  <Image
                    src="MembersCebu/Female.png"
                    alt="Your Picture"
                    className="profile-image"
                    roundedCircle
                  />
                </div>
                <div className="profile-content">
                  <h1 className="profile-title">Branch Head of Pampanga</h1>
                  <p className="profile-description">Branch Manager</p>
                  <Accordion
                    className="custom-accordion"
                    expanded={branchManagerAccordionExpanded}
                    onChange={handleBranchManagerAccordionChange}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="branch-manager-content"
                      id="branch-manager-header"
                    >
                      View biography
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* Biography content */}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              {branchManagerAccordionExpanded && (
                <CircleSlider branch="Pampanga" />
              )}
              {/* Profile Container for Branch Manager */}
              <div className="profile-container">
                <div className="profile-picture">
                  <Image
                    src="MembersCebu/Male.png"
                    alt="Your Picture"
                    className="profile-image"
                    roundedCircle
                  />
                </div>
                <div className="profile-content">
                  <h1 className="profile-title">Branch Head of Pampanga</h1>
                  <p className="profile-description">Branch Manager</p>
                  <Accordion
                    className="custom-accordion"
                    expanded={branchHeadAccordionExpanded}
                    onChange={handleBranchHeadAccordionChange}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="branch-head-content"
                      id="branch-head-header"
                    >
                      View biography
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* Biography content */}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              {branchHeadAccordionExpanded && (
                <CircleSlider branch="Pampanga" />
              )}
            </Container>
          </Tab.Pane>
          <Tab.Pane eventKey="Bohol">
            <Container>
              <div className="profile-container">
                <div className="profile-picture">
                  <Image
                    src="MembersCebu/Male.png"
                    alt="Your Picture"
                    className="profile-image"
                    roundedCircle
                  />
                </div>
                <div className="profile-content">
                  <h1 className="profile-title">Branch Head of Bohol</h1>
                  <p className="profile-description">Branch Manager</p>
                  <Accordion
                    className="custom-accordion"
                    expanded={branchManagerAccordionExpanded}
                    onChange={handleBranchManagerAccordionChange}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="branch-manager-content"
                      id="branch-manager-header"
                    >
                      View biography
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* Biography content */}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              {branchManagerAccordionExpanded && (
                <CircleSlider branch="Bohol" />
              )}
              {/* Profile Container for Branch Manager */}
              <div className="profile-container">
                <div className="profile-picture">
                  <Image
                    src="MembersCebu/Female.png"
                    alt="Your Picture"
                    className="profile-image"
                    roundedCircle
                  />
                </div>
                <div className="profile-content">
                  <h1 className="profile-title">Branch Head of Makati</h1>
                  <p className="profile-description">Branch Manager</p>
                  <Accordion
                    className="custom-accordion"
                    expanded={branchHeadAccordionExpanded}
                    onChange={handleBranchHeadAccordionChange}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="branch-head-content"
                      id="branch-head-header"
                    >
                      View biography
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* Biography content */}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              {branchHeadAccordionExpanded && <CircleSlider branch="Bohol" />}
            </Container>
          </Tab.Pane>
          <Tab.Pane eventKey="Dumaguete">
            <Container>
              <div className="profile-container">
                <div className="profile-picture">
                  <Image
                    src="MembersCebu/Male.png"
                    alt="Your Picture"
                    className="profile-image"
                    roundedCircle
                  />
                </div>
                <div className="profile-content">
                  <h1 className="profile-title">Branch Head of Dumaguete</h1>
                  <p className="profile-description">Branch Manager</p>
                  <Accordion
                    className="custom-accordion"
                    expanded={branchManagerAccordionExpanded}
                    onChange={handleBranchManagerAccordionChange}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="branch-manager-content"
                      id="branch-manager-header"
                    >
                      View biography
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* Biography content */}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              {branchManagerAccordionExpanded && (
                <CircleSlider branch="Dumaguete" />
              )}
              {/* Profile Container for Branch Manager */}
              <div className="profile-container">
                <div className="profile-picture">
                  <Image
                    src="MembersCebu/Female.png"
                    alt="Your Picture"
                    className="profile-image"
                    roundedCircle
                  />
                </div>
                <div className="profile-content">
                  <h1 className="profile-title">Branch Head of Dumaguete</h1>
                  <p className="profile-description">Branch Manager</p>
                  <Accordion
                    className="custom-accordion"
                    expanded={branchHeadAccordionExpanded}
                    onChange={handleBranchHeadAccordionChange}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="branch-head-content"
                      id="branch-head-header"
                    >
                      View biography
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* Biography content */}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              {branchHeadAccordionExpanded && (
                <CircleSlider branch="Dumaguete" />
              )}
            </Container>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default SdaChart;
