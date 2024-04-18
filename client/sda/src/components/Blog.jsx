import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css-assets/Blog.css";

export default function Blog() {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  const [dataCard, setCardData] = useState([
    {
      title: "AIA Critical Protect 100",
      readingTime: "3 mins",
      date: "2024-02-20",
    },
    {
      title: "Ways to protect your finances for the unexpected",
      readingTime: "5 mins",
      date: "2024-02-20",
    },
    {
      title: "Payday saving tips",
      readingTime: "2 mins",
      date: "2024-03-20",
    },
    {
      title: "Investment benefits you should know",
      readingTime: "4 mins",
      date: "2024-04-20",
    },
    {
      title: "Tips for a healthy start in 2024",
      readingTime: "3 mins",
      date: "2024-05-20",
    },
    {
      title: "Signs that you are financially independent",
      readingTime: "3 mins",
      date: "2024-06-20",
    },
    {
      title: "Signs that you are financially independent",
      readingTime: "3 mins",
      date: "2024-07-20",
    },
    {
      title: "Signs that you are financially independent",
      readingTime: "3 mins",
      date: "2024-010-20",
    },
    {
      title: "Signs that you are financially independent",
      readingTime: "3 mins",
      date: "2023-02-20",
    },
    {
      title: "Signs that you are financially independent",
      readingTime: "3 mins",
      date: "2021-02-20",
    },
    {
      title: "Signs that you are financially independent",
      readingTime: "3 mins",
      date: "2023-02-20",
    },
    {
      title: "Signs that you are financially independent",
      readingTime: "3 mins",
      date: "2022-02-20",
    },
    {
      title: "Signs that you are financially independent",
      readingTime: "3 mins",
      date: "2023-02-20",
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 500);
  }, []);

  const handleClick = () => {
    navigate("/another-page");
  };

  const generateCarouselItems = () => {
    return dataCard.map((card, index) => (
      <div className="carousel-item-wrapper" key={index}>
        <Card style={{ width: "15rem", margin: "0 auto", height: "20rem" }}>
          <Card.Img
            variant="top"
            src="/Images/Trash/a1.png"
            style={{ height: "50%" }}
          />
          <Card.Body
            className="card-body"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div>
              <p style={{ margin: "0" }}>Article</p>
              <Card.Title>{card.title}</Card.Title>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faBookOpen}
                style={{ marginRight: "5px" }}
              />
              <span>{card.readingTime} read</span>
            </div>
            <div style={{ marginTop: "auto", marginLeft: "auto" }}>
              <FontAwesomeIcon
                icon={faArrowRight}
                onClick={handleClick}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  transition: "color 0.3s",
                }}
                className="arrow-icon"
              />
            </div>
          </Card.Body>
        </Card>
      </div>
    ));
  };
  return (
    <div>
      <div
        className="fade-in"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <h1 style={{ textAlign: "center" }}>Protection</h1>
        <Carousel
          centerMode={true}
          responsive={responsive}
          showDots={true}
          infinite={true}
          swipeable={true}
          draggable={true}
          containerClass="container-padding-bottom"
          dotListClass="custom-dot-list-style"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
          renderDotsOutside
        >
          {generateCarouselItems()}
        </Carousel>
      </div>
      <div
        className="fade-in"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <h1 style={{ textAlign: "center" }}>Tips</h1>
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          swipeable={true}
          draggable={true}
          containerClass="container-padding-bottom"
          dotListClass="custom-dot-list-style"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
          renderDotsOutside
        >
          {generateCarouselItems()}
        </Carousel>
      </div>
      <div
        className="fade-in"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <h1 style={{ textAlign: "center" }}>Health</h1>
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          swipeable={true}
          draggable={true}
          containerClass="container-padding-bottom"
          dotListClass="custom-dot-list-style"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
          renderDotsOutside
        >
          {generateCarouselItems()}
        </Carousel>
      </div>
    </div>
  );
}
