import React, { useState } from "react";
import {
  Tab,
  Container,
  Card,
  Modal,
  Carousel,
  Image,
  Row,
  Col,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css-assets/Newspage.css";
import * as Icon from "react-bootstrap-icons";

function News() {
  // Define state variables for each modal
  const [announcementModalShow, setAnnouncementModalShow] = useState(false);
  const [achievementModalShow, setAchievementModalShow] = useState(false);
  const [eventModalShow, setEventModalShow] = useState(false);

  // Function to handle modal show for each tab
  const handleAnnouncementModalShow = () => {
    setAnnouncementModalShow(true);
    setAchievementModalShow(false); // Close achivement modal if open
    setEventModalShow(false); // Close event modal if open
  };

  const handleAchievementModalShow = () => {
    setAchievementModalShow(true);
    setAnnouncementModalShow(false); // Close announcement modal if open
    setEventModalShow(false); // Close event modal if open
  };

  const handleEventModalShow = () => {
    setEventModalShow(true);
    setAnnouncementModalShow(false); // Close announcement modal if open
    setAchievementModalShow(false); // Close achivement modal if open
  };

  const [announcementModalShow1, setAnnouncementModalShow1] = useState(false);
  const [announcementModalShow2, setAnnouncementModalShow2] = useState(false);
  const [announcementModalShow3, setAnnouncementModalShow3] = useState(false);
  const [announcementModalShow4, setAnnouncementModalShow4] = useState(false);
  const [announcementModalShow5, setAnnouncementModalShow5] = useState(false);
  const [announcementModalShow6, setAnnouncementModalShow6] = useState(false);
  const [announcementModalShow7, setAnnouncementModalShow7] = useState(false);
  const [announcementModalShow8, setAnnouncementModalShow8] = useState(false);
  const [announcementModalShow9, setAnnouncementModalShow9] = useState(false);
  const [announcementModalShow10, setAnnouncementModalShow10] = useState(false);
  const [achievementModalShow1, setAchievementShow1] = useState(false);
  const [achievementModalShow2, setAchievementShow2] = useState(false);
  const [achievementModalShow3, setAchievementShow3] = useState(false);
  const [achievementModalShow4, setAchievementShow4] = useState(false);
  const [achievementModalShow5, setAchievementShow5] = useState(false);
  const [achievementModalShow6, setAchievementShow6] = useState(false);
  const [achievementModalShow7, setAchievementShow7] = useState(false);
  const [achievementModalShow8, setAchievementShow8] = useState(false);
  const [eventModalShow1, setEventShow1] = useState(false);
  const [eventModalShow2, setEventShow2] = useState(false);
  const [eventModalShow3, setEventShow3] = useState(false);
  const [eventModalShow4, setEventShow4] = useState(false);
  const [eventModalShow5, setEventShow5] = useState(false);
  const [eventModalShow6, setEventShow6] = useState(false);
  const [eventModalShow7, setEventShow7] = useState(false);

  const handleModalShow = (modalNumber) => {
    if (modalNumber === 1) {
      setAnnouncementModalShow1(true);
    } else if (modalNumber === 2) {
      setAnnouncementModalShow2(true);
    } else if (modalNumber === 3) {
      setAnnouncementModalShow3(true);
    } else if (modalNumber === 4) {
      setAnnouncementModalShow4(true);
    } else if (modalNumber === 5) {
      setAnnouncementModalShow5(true);
    } else if (modalNumber === 19) {
      setAnnouncementModalShow6(true);
    } else if (modalNumber === 20) {
      setAnnouncementModalShow7(true);
    } else if (modalNumber === 21) {
      setAnnouncementModalShow8(true);
    } else if (modalNumber === 22) {
      setAnnouncementModalShow9(true);
    } else if (modalNumber === 23) {
      setAnnouncementModalShow10(true);
    } else if (modalNumber === 6) {
      setAchievementShow1(true);
    } else if (modalNumber === 7) {
      setAchievementShow2(true);
    } else if (modalNumber === 8) {
      setAchievementShow3(true);
    } else if (modalNumber === 9) {
      setAchievementShow4(true);
    } else if (modalNumber === 10) {
      setAchievementShow5(true);
    } else if (modalNumber === 11) {
      setAchievementShow6(true);
    } else if (modalNumber === 18) {
      setAchievementShow7(true);
    } else if (modalNumber === 24) {
      setAchievementShow8(true);
    } else if (modalNumber === 12) {
      setEventShow1(true);
    } else if (modalNumber === 13) {
      setEventShow2(true);
    } else if (modalNumber === 14) {
      setEventShow3(true);
    } else if (modalNumber === 15) {
      setEventShow4(true);
    } else if (modalNumber === 16) {
      setEventShow5(true);
    } else if (modalNumber === 17) {
      setEventShow6(true);
    }
  };

  const toggleFullScreen = () => {
    const elem = document.querySelector(".custom-carousel");
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  };

  const toggleImageFullScreen = () => {
    const images = document.querySelectorAll(".img-size");
    images.forEach((image) => {
      if (!document.fullscreenElement) {
        image.requestFullscreen().catch((err) => {
          alert(
            `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
          );
        });
      } else {
        document.exitFullscreen();
      }
    });
  };

  return (
    <div>
      <Container className="nav-container">
        <Tab.Container
          defaultActiveKey="announcement"
          id="fill-tab-example"
          fill
        >
          <Nav className="nav-custom" variant="pills">
            <Nav.Item>
              <Nav.Link
                className="navlink-content"
                eventKey="announcement"
                title="Announcement"
              >
                News
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="navlink-content"
                eventKey="achievement"
                title="Achievement"
              >
                Achievement
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="navlink-content"
                eventKey="event"
                title="Event"
              >
                Event
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="announcement">
              <Row>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(1)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/announcement-1/a1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        Geared up for final hurrah into the end of 2023! 👍
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={announcementModalShow1}
                    onHide={() => setAnnouncementModalShow1(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                          <Carousel.Item key={index}>
                            <Image
                              className="img-size"
                              src={`/announcement-1/a${index + 1}.jpg`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        Geared up for final hurrah into the end of 2023! 👍
                      </Modal.Title>
                      <p className="p-margin">
                        SDA Agency Assemblies in November: Makati, Pampanga and
                        Cebu. With our BDMs Bimbs Moreno, Vine Norte, and Maima
                        Ruiz. Thank you to the ECM Team ( Existing Customer
                        Marketing) for sharing their ongoing customer campaigns,
                        opportunities and processes.
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(2)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/announcement-1/aa1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        SDA Pampanga monthly meeting with BDM Vine Norte!
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={announcementModalShow2}
                    onHide={() => setAnnouncementModalShow2(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[1, 2, 3].map((_, index) => (
                          <Carousel.Item key={index}>
                            <Image
                              className="img-size"
                              src={`/announcement-1/aa${index + 1}.jpg`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        SDA Cebu participates in the Visayas Leaders’ Congress
                        in AIA Philippines Center, Cebu City.
                      </Modal.Title>
                      <p className="p-margin">
                        We are doing the One Provincial TikTok “Be the Best”
                        with UM Hermie Perez, Thelma Carlos, Benny Ortega, Pio
                        Arugay, Tess See, and Ms Portia. Cheers!
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(3)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/announcement-1/aaa1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        SDA Cebu participates in the Visayas Leaders’ Congress
                        in AIA Philippines Center, Cebu City.{" "}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={announcementModalShow3}
                    onHide={() => setAnnouncementModalShow3(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                          <Carousel.Item key={index}>
                            <Image
                              className="img-size"
                              src={`/announcement-1/aaa${index + 1}.jpg`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        SDA Cebu participates in the Visayas Leaders’ Congress
                        in AIA Philippines Center, Cebu City.
                      </Modal.Title>
                      <p className="p-margin">
                        Attended by UMs Lilybeth dela Cruz and Debbie Cabrales,
                        and Ms Portia. Tapping opportunities and accepting
                        challenges for recruitment, activation and productivity!
                        Congratulations to UM Beth for being Top Unit Manager in
                        New Recruits and Highest in BOP Participation for the
                        past ten months of 2022 (YTD Oct)! 👏🌟
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(4)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/announcement-1/aaaa1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        The fourth quarter brings a lot of incentives and
                        promotions, it’s all up to us for the taking! 😊👌
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={announcementModalShow4}
                    onHide={() => setAnnouncementModalShow4(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[1, 2, 3, 4, 5].map((_, index) => (
                          <Carousel.Item key={index}>
                            <Image
                              className="img-size"
                              src={`/announcement-1/aaaa${index + 1}.jpg`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        The fourth quarter brings a lot of incentives and
                        promotions, it’s all up to us for the taking! 😊👌
                      </Modal.Title>
                      <p className="p-margin">
                        Last week, SDA Makati had its Agency Meeting with Sales
                        Head Holly DeVilla and new BDM Bimbs Moreno. Advisors
                        and leaders were present both physically and virtually!
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(5)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/announcement-1/ab1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        Check out our SDA Agency Meetings in February across
                        Metro Manila, Pampanga, Bohol and Cebu!{" "}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={announcementModalShow5}
                    onHide={() => setAnnouncementModalShow5(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[...Array(27)].map((_, index) => (
                          <Carousel.Item key={index}>
                            <Image
                              className="img-size"
                              src={`/announcement-1/ab${(index % 27) + 1}.jpg`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        Check out our SDA Agency Meetings in February across
                        Metro Manila, Pampanga, Bohol and Cebu!
                      </Modal.Title>
                      <p className="p-margin">
                        It was a simple gathering to share, update and learn,
                        and recognize Top Producers. A toast for a better year
                        ahead!
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(19)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/announcement-1/ac1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        Our first Hybrid Agency Meeting in Makati! A mix of F2F
                        with Zoom Coverage!{" "}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={announcementModalShow6}
                    onHide={() => setAnnouncementModalShow6(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[...Array(3)].map((_, index) => (
                          <Carousel.Item key={index}>
                            <Image
                              className="img-size"
                              src={`/announcement-1/ac${(index % 3) + 1}.jpg`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        Our first Hybrid Agency Meeting in Makati! A mix of F2F
                        with Zoom Coverage!
                      </Modal.Title>
                      <p className="p-margin">
                        We appreciate everyone's participation and attendance.
                        Shout out to Manila One Sales Head Ms. Holly De Villa
                        for joining us. 😊👌
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(20)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/announcement-1/ad1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        We proudly congratulate SDA Pampanga's very own MDRTs
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={announcementModalShow7}
                    onHide={() => setAnnouncementModalShow7(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[...Array(3)].map((_, index) => (
                          <Carousel.Item key={index}>
                            <Image
                              className="img-size"
                              src={`/announcement-1/ad${(index % 3) + 1}.jpg`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        We proudly congratulate SDA Pampanga's very own MDRTs
                      </Modal.Title>
                      <p className="p-margin">
                        MDRTs Mr. Rudy Mallari & Ms. Wilma Joaquin for
                        qualifying for AIA's Trip Promos!!! 🎉
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(21)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/announcement-1/ae1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        SDA Cebu was able to hold its first face-to-face agency
                        meeting in two years!
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={announcementModalShow8}
                    onHide={() => setAnnouncementModalShow8(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[...Array(4)].map((_, index) => (
                          <Carousel.Item key={index}>
                            <Image
                              className="img-size"
                              src={`/announcement-1/ae${(index % 4) + 1}.jpg`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        SDA Cebu was able to hold its first face-to-face agency
                        meeting in two years!
                      </Modal.Title>
                      <p className="p-margin">
                        The team headed by Unit Managers Beth Dela Cruz & Josef
                        Yocte featured both familiar and new faces! The energy
                        was infectious, which led to a meeting that was both
                        productive and filled with fun and excitement. 🥰🥰
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="achievement">
              <Row>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(6)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/achievement-1/r1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        Geared up for final hurrah into the end of 2023! 👍
                      </Card.Title>
                    </Card.Body>
                  </Card>

                  <Modal
                    size="lg"
                    show={achievementModalShow1}
                    onHide={() => setAchievementShow1(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[1, 2].map((_, index) => (
                          <Carousel.Item key={index}>
                            <Image
                              className="img-size"
                              src={`/achievement-1/r${index + 1}.jpg`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        Congratulations to 2024 MDRT candidates
                      </Modal.Title>
                      <p className="p-margin">
                        - Merla Dela Cruz, September qualifier <br />
                        - Thelma Carlos, November qualifier <br /> <br />
                        It is Merla’s 5th year as an MDRT and Thelma’s 14th
                        year! An exemplary achievement during these challenging
                        times. Cheers to them for their dedication and hard
                        work, and upholding our mission to bring protection to
                        families.
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(7)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/achievement-1/rr1.jpg"
                    />
                    <Card.Body className="custom-card-body">
                      <Card.Title className="custom-card-title">
                        Congratulations to our 2023 Top SDA Advisor Ms Wilma
                        Joaquin
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={achievementModalShow2}
                    onHide={() => setAchievementShow2(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleImageFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      {[1].map((_, index) => (
                        <Image
                          key={index}
                          className="img-size"
                          src={`/achievement-1/rr${index + 1}.jpg`}
                        />
                      ))}

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        Congratulations to our 2023 Top SDA Advisor Ms Wilma
                        Joaquin
                      </Modal.Title>
                      <p className="p-margin">
                        Congratulations to our 2023 Top SDA Advisor Ms Wilma
                        Joaquin for qualifying to the Austria trip incentive!
                        Wilma is now a Court of the Table (COT) candidate to the
                        prestigious MDRT Awards. Cheers to you Wilma! 🌟👏
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(8)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/achievement-1/rrr1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        Congratulations to our 1ST MDRT in 2024, Ms. Ma. Wilma
                        Joaquin!
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={achievementModalShow3}
                    onHide={() => setAchievementShow3(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleImageFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      {[1].map((_, index) => (
                        <Image
                          className="img-size"
                          src={`/achievement-1/rrr${index + 1}.jpg`}
                        />
                      ))}

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        Congratulations to our 1ST MDRT in 2024, Ms. Ma. Wilma
                        Joaquin!
                      </Modal.Title>
                      <p className="p-margin">
                        👏🏻👏🏻👏🏻🏆🏆🏆 Who will be SDA's next MDRT?
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(9)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/achievement-1/rrrr1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        Congratulations to our newly-appointed Unit Manager
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={achievementModalShow4}
                    onHide={() => setAchievementShow4(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[1, 2].map((_, index) => (
                          <Carousel.Item key={index}>
                            <Image
                              className="img-size"
                              src={`/achievement-1/rrrr${index + 1}.jpg`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        Congratulations to our newly-appointed Unit Manager
                      </Modal.Title>
                      <p className="p-margin">
                        Mrs. Marilyn Rotap of SDA Makati - Direct Uniti! She has
                        taken on the challenge of being a Next Gen Leader. 💪
                        Marilyn brings with her over two decades of experience
                        in AIA Philippines. All the best Marilyn on your new
                        endeavor! 🥳
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(10)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/achievement-1/ac1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        Highlights from SDA Pampanga's Planning Session for 2023
                        and Recognition of Top Performers in 2022{" "}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={achievementModalShow5}
                    onHide={() => setAchievementShow5(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[...Array(15)].map((_, index) => (
                          <Carousel.Item key={index}>
                            <Image
                              className="img-size"
                              src={`/achievement-1/ac${(index % 15) + 1}.jpg`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        Highlights from SDA Pampanga's Planning Session for 2023
                        and Recognition of Top Performers in 2022
                      </Modal.Title>
                      <p className="p-margin">
                        MDRTs ( Million Dollar Round Table Club):
                        <br />
                        - Rodolfo Mallari
                        <br />
                        - Wilma Joaquin
                        <br />
                        - Thelma Carlos
                        <br />
                        - Fatima Rodriguez <br />
                        SDA Top Advisors Policy Count 2022
                        <br />
                        #1 Thelma Carlos
                        <br />
                        #3 Fatima Rodriguez
                        <br />
                        #4 Rodolfo Mallari <br />
                        SDA Top Advisors Corporate Solutions 2022
                        <br />
                        - Fatima Rodriguez
                        <br />
                        SDA Luzon Top 5 Advisor in ANP 2022
                        <br />
                        - Cipriano Dalupang, Jr. <br />
                        CONGRATULATIONS! Here is to a great and better 2023!
                        <br />
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(11)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/achievement-1/ad1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        SDA Makati Planning and Recognition of MDRT and Senior
                        Advisors{" "}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={achievementModalShow6}
                    onHide={() => setAchievementShow6(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[...Array(5)].map((_, index) => (
                          <Carousel.Item key={index}>
                            <Image
                              className="img-size"
                              src={`/achievement-1/ad${(index % 5) + 1}.jpg`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        SDA Makati Planning and Recognition of MDRT and Senior
                        Advisors
                      </Modal.Title>
                      <p className="p-margin">
                        @AIA Genesis last January 12. Here’s to a great and
                        better 2023! 🥳 Congratulations to MDRT Merla dela Cruz,
                        Senior Advisors Renee Cuartero, Ana Marie Manalo, Marge
                        Tongko and Edna Parreno!
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(18)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/achievement-1/ae1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        Congratulations to our 2023 MDRTs - Wilma Joaquin, Rudy
                        Mallari and Thelma Carlos!
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={achievementModalShow7}
                    onHide={() => setAchievementShow7(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[...Array(9)].map((_, index) => (
                          <Carousel.Item key={index}>
                            <Image
                              className="img-size"
                              src={`/achievement-1/ae${(index % 9) + 1}.jpg`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        AIA Philippines' very own President, Mr. Kelvin Ang
                        visited Pampanga to join the Central Luzon Advisors and
                        Leaders Assembly and Recognition.
                      </Modal.Title>
                      <p className="p-margin">
                        Congratulations to our 2023 MDRTs - Wilma Joaquin, Rudy
                        Mallari and Thelma Carlos! Rudy Mallari was recognized
                        as a Consistent Monthly Producer YTD, and UM Hermie
                        Perez as well for being in the Top 3 for Agent
                        Activation! 🤩🤩 Let’s all make 2022 a strong final
                        quarter!
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(24)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/achievement-1/af1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        Congratulations to SDA's 2nd MDRT candidate for 2023,
                        Mr. Rudy Mallari (SDA Pampanga Direct Unit)!
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={achievementModalShow8}
                    onHide={() => setAchievementShow8(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleImageFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      {[...Array(1)].map((_, index) => (
                        <Image
                          className="img-size"
                          src={`/achievement-1/af${(index % 1) + 1}.jpg`}
                        />
                      ))}

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        Congratulations to SDA's 2nd MDRT candidate for 2023,
                        Mr. Rudy Mallari (SDA Pampanga Direct Unit)!
                      </Modal.Title>
                      <p className="p-margin">
                        This is his 34th time to qualify to the prestigious
                        club. This is an accomplishment that is unmatched and is
                        a testament to his consistent excellence! Sir Rudy is
                        also a 3-time Court of the Table awardee. With more than
                        45 years of service and dedication, his journey with AIA
                        Philippines is nothing but inspiring! Cheers! 🥳
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="event">
              <Row>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(12)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/event-1/aaaaa1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        It was a happy and fruitful get-together!
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={eventModalShow1}
                    onHide={() => setEventShow1(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                          (_, index) => (
                            <Carousel.Item key={index}>
                              <Image
                                className="img-size"
                                src={`/event-1/aaaaa${index + 1}.jpg`}
                              />
                            </Carousel.Item>
                          )
                        )}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        It was a happy and fruitful get-together!
                      </Modal.Title>
                      <p className="p-margin">
                        Check out some photos from SDA Pampanga's Agency Meeting
                        with Sales Head Myrna Tiburcio and BDM EJ Eser Jose, and
                        Mgr Pepot Sto Domingo. Congratulations to SDA Pampanga
                        for a strong October performance, and to awardee
                        producers Rudy Mallari, Thelma Carlos and Tess See!
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(13)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/event-1/e1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        We join you this holiday season and wish you and your
                        families a HAPPY and PROSPEROUS NEW YEAR!
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={eventModalShow2}
                    onHide={() => setEventShow2(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>

                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[...Array(22)].map((_, index) => (
                          <Carousel.Item key={index}>
                            <Image
                              className="img-size"
                              src={`/event-1/e${(index % 22) + 1}.jpg`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        We join you this holiday season and wish you and your
                        families a HAPPY and PROSPEROUS NEW YEAR!
                      </Modal.Title>
                      <p className="p-margin">
                        Thank the good Lord for His blessings in 2022. Praying
                        for a better year in 2023! Our agencies celebrated
                        Christmas in Makati, Pampanga, Bohol and Cebu, filled
                        with fun and thanksgiving. "We look back and thank God.
                        We look forward and trust God."
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(14)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/event-1/ea1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        All systems go for a strong fourth quarter!
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={eventModalShow3}
                    onHide={() => setEventShow3(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>

                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[...Array(10)].map((_, index) => (
                          <Carousel.Item key={index}>
                            <Image
                              className="img-size"
                              src={`/event-1/ea${(index % 22) + 1}.jpg`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        Let’s power it up for the rest of 2022! 🌟🌟🌟
                      </Modal.Title>
                      <p className="p-margin">
                        Thank you BDC Jack Javier for the target setting
                        sessions with SDA Bohol and SDA Cebu Units DelaCruz,
                        Yocte and Cabrales.
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="custom-card"
                    onClick={() => handleModalShow(15)}
                  >
                    <Card.Img
                      className="custom-card-img"
                      variant="top"
                      src="/event-1/eb1.jpg"
                    />
                    <Card.Body>
                      <Card.Title className="custom-card-title">
                        All systems go for a strong fourth quarter!
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal
                    size="lg"
                    show={eventModalShow4}
                    onHide={() => setEventShow4(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton className="remove-header">
                      <Icon.ArrowsFullscreen
                        onClick={toggleFullScreen}
                        className="fullscreen-btn"
                      />
                    </Modal.Header>

                    <Modal.Body>
                      <Carousel slide={false} className="custom-carousel">
                        {[...Array(16)].map((_, index) => (
                          <Carousel.Item key={index}>
                            <Image
                              className="img-size"
                              src={`/event-1/eb${(index % 16) + 1}.jpg`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Modal.Title
                        id="example-modal-sizes-title-lg"
                        className="modal-margin"
                      >
                        Let’s power it up for the rest of 2022! 🌟🌟🌟
                      </Modal.Title>
                      <p className="p-margin">
                        Thank you BDC Jack Javier for the target setting
                        sessions with SDA Bohol and SDA Cebu Units DelaCruz,
                        Yocte and Cabrales.
                      </p>
                    </Modal.Body>
                  </Modal>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default News;
