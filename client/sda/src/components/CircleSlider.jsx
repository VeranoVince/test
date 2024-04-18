import React, { useState } from "react";
import Slider from "react-slick";
import { Modal, Button } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CircleOpacity } from "../StyledComponents";
import "../css-assets/CircleSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CircleSlider({ branch }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleCardClick = (person) => {
    setSelectedPerson(person);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return <FaChevronLeft className="arrow prev" onClick={onClick} />;
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return <FaChevronRight className="arrow next" onClick={onClick} />;
  };

  const branchMembers = {
    Cebu: [
      {
        id: 1,
        name: "Celeste Bongco-Leonardia",
        role: "Employee",
        image: "MembersCebu/Celeste Bongco-Leonardia.png",
        details: "More details about Celeste...",
      },
      {
        id: 2,
        name: "Dann Kristoffer Causing",
        role: "Employee",
        image: "MembersCebu/Dann Kristoffer Causing.png",
        details: "More details about Dann...",
      },
      {
        id: 3,
        name: "Debbie Apuya-Cabrales",
        role: "Employee",
        image: "MembersCebu/Debbie Apuya-Cabrales- Admin.png",
        details: "More details about Debbie...",
      },
      {
        id: 4,
        name: "Edna Liz Medalla Damaso",
        role: "Employee",
        image: "MembersCebu/Edna Liz Medalla Damaso.png",
        details: "More details about Edna...",
      },
      {
        id: 5,
        name: "Gabriel M. Barroso",
        role: "Employee",
        image: "MembersCebu/Gabriel M. Barroso.png",
        details: "More details about Gabriel...",
      },
      {
        id: 6,
        name: "Ivy Alo",
        role: "Employee",
        image: "MembersCebu/Ivy Alo.png",
        details: "More details about Ivy...",
      },
      {
        id: 7,
        name: "James Torregosa Casas",
        role: "Employee",
        image: "MembersCebu/James Torregosa Casas.png",
        details: "More details about James...",
      },
      {
        id: 8,
        name: "Jeshel Villaver",
        role: "Employee",
        image: "MembersCebu/Jeshel Villaver.png",
        details: "More details about Jeshel...",
      },
      {
        id: 9,
        name: "Jhadien Heyrosa",
        role: "Employee",
        image: "MembersCebu/Jhadien Heyrosa.png",
        details: "More details about Jhadien...",
      },
      {
        id: 10,
        name: "Joanne Mendoza Ricamata",
        role: "Employee",
        image: "MembersCebu/Joanne Mendoza Ricamata.png",
        details: "More details about Joanne...",
      },
      {
        id: 11,
        name: "Jomar Gonzales Arenas",
        role: "Employee",
        image: "MembersCebu/Jomar Gonzales Arenas.png",
        details: "More details about Jomar...",
      },
      {
        id: 12,
        name: "Josefino Yocte",
        role: "Employee",
        image: "MembersCebu/Josefino Yocte.png",
        details: "More details about Josefino...",
      },
      {
        id: 13,
        name: "Josh Aurelio",
        role: "Employee",
        image: "MembersCebu/Josh Aurelio.png",
        details: "More details about Josh...",
      },
      {
        id: 14,
        name: "Joy Bulado",
        role: "Employee",
        image: "MembersCebu/Joy Bulado.png",
        details: "More details about Joy...",
      },
      {
        id: 15,
        name: "JP Cabrales",
        role: "Employee",
        image: "MembersCebu/JP Cabrales.png",
        details: "More details about JP...",
      },
      {
        id: 16,
        name: "Laduj Me'Anne",
        role: "Employee",
        image: "MembersCebu/Laduj Me_Anne.png",
        details: "More details about Laduj...",
      },
      {
        id: 17,
        name: "Letecia Morales Davila",
        role: "Employee",
        image: "MembersCebu/Letecia Morales Davila.png",
        details: "More details about Letecia...",
      },
      {
        id: 18,
        name: "Lily Beth Dela Cruz",
        role: "Employee",
        image: "MembersCebu/Lily Beth.png",
        details: "More details about Lily Beth...",
      },
      {
        id: 19,
        name: "Ma Josefa David - Lucero",
        role: "Employee",
        image: "MembersCebu/Ma Josefa David - Lucero.png",
        details: "More details about Ma Josefa...",
      },
      {
        id: 20,
        name: "Maria Griselda F Ruiz",
        role: "Employee",
        image: "MembersCebu/Maria Griselda F Ruiz.png",
        details: "More details about Maria Griselda...",
      },
      {
        id: 21,
        name: "Maylen Alcuirez Tanudra",
        role: "Employee",
        image: "MembersCebu/Maylen Alcuirez Tanudra.png",
        details: "More details about Maylen...",
      },
      {
        id: 22,
        name: "Myrna Sangcupan Solaiman",
        role: "Employee",
        image: "MembersCebu/Myrna Sangcupan Solaiman.png",
        details: "More details about Myrna...",
      },
      {
        id: 23,
        name: "Nolibeth Ligad Enriquez",
        role: "Employee",
        image: "MembersCebu/Nolibeth Ligad Enriquez.png",
        details: "More details about Nolibeth...",
      },
      {
        id: 24,
        name: "Josefino Sto Domingo",
        role: "Founder",
        image: "MembersCebu/Pepot Sto Domingo.png",
        details: "More details about Pepot...",
      },
      {
        id: 25,
        name: "Portia Sto Domingo",
        role: "Operations and Business Development Manager",
        image: "MembersCebu/Portia Sto Domingo.png",
        details: `
    <ul>
      <li>Almost Four Decades of Experience in Corporate Life Insurance Industry</li>
  
      <li>Former Head of Philamlife in Strategic Planning, Corporate
        Solutions, Communications, Business Development, Risk
        Management, Agency Training</li>
  
      <li>Currently Operations & Business Development Manager of
        Sto. Domingo Associates, 2015-present</li>
    </ul>
  `,
      },

      {
        id: 26,
        name: "Robbie Sto Domingo",
        role: "Employee",
        image: "MembersCebu/Robbie Sto Domingo.png",
        details: "More details about Robbie...",
      },
      {
        id: 27,
        name: "Sherelle Mae",
        role: "Employee",
        image: "MembersCebu/Sherelle Mae.png",
        details: "More details about Sherelle...",
      },
      {
        id: 28,
        name: "Shirehan Vicente Cabrales",
        role: "Employee",
        image: "MembersCebu/Shirehan Vicente Cabrales.png",
        details: "More details about Shirehan...",
      },
      // Add more members for Cebu as needed
    ],
    // Add other branches similarly
    Makati: [
      {
        id: 16,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 17,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 18,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 19,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 20,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 21,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 22,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 23,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 24,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 25,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: `
          <ul>
            <li>Over Two Decades of Experience in Corporate Life Insurance Industry</li>
        
            <li>Former Head of Philamlife in Strategic Planning, Corporate
              Solutions, Communications, Business Development, Risk
              Management, Agency Training</li>
        
            <li>Currently Operations & Business Development Manager of
              Sto. Domingo Associates, 2015-present</li>
          </ul>
        `,
      },
      {
        id: 26,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 27,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 28,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
    ],
    Pampanga: [
      {
        id: 16,
        name: "Employee of Pampanga",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 17,
        name: "Employee of Pampanga",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 18,
        name: "Employee of Pampanga",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 19,
        name: "Employee of Pampanga",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 20,
        name: "Employee of Pampanga",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 21,
        name: "Employee of Pampanga",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 22,
        name: "Employee of Pampanga",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 23,
        name: "Employee of Pampanga",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 24,
        name: "Employee of Pampanga",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 25,
        name: "Employee of Pampanga",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: `
          <ul>
            <li>Over Two Decades of Experience in Corporate Life Insurance Industry</li>
        
            <li>Former Head of Philamlife in Strategic Planning, Corporate
              Solutions, Communications, Business Development, Risk
              Management, Agency Training</li>
        
            <li>Currently Operations & Business Development Manager of
              Sto. Domingo Associates, 2015-present</li>
          </ul>
        `,
      },
      {
        id: 26,
        name: "Employee of Pampanga",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 27,
        name: "Employee of Pampanga",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 28,
        name: "Employee of Pampanga",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
    ],
    Bohol: [
      {
        id: 16,
        name: "Employee of Bohol",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 17,
        name: "Employee of Bohol",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 18,
        name: "Employee of Bohol",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 19,
        name: "Employee of Bohol",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 20,
        name: "Employee of Bohol",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 21,
        name: "Employee of Bohol",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 22,
        name: "Employee of Bohol",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 23,
        name: "Employee of Bohol",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 24,
        name: "Employee of Bohol",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 25,
        name: "Employee of Bohol",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: `
          <ul>
            <li>Over Two Decades of Experience in Corporate Life Insurance Industry</li>
        
            <li>Former Head of Philamlife in Strategic Planning, Corporate
              Solutions, Communications, Business Development, Risk
              Management, Agency Training</li>
        
            <li>Currently Operations & Business Development Manager of
              Sto. Domingo Associates, 2015-present</li>
          </ul>
        `,
      },
      {
        id: 26,
        name: "Employee of Bohol",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 27,
        name: "Employee of Bohol",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 28,
        name: "Employee of Bohol",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
    ],
    Dumaguete: [
      {
        id: 16,
        name: "Employee of Dumaguete",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 17,
        name: "Employee of Dumaguete",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 18,
        name: "Employee of Dumaguete",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 19,
        name: "Employee of Dumaguete",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 20,
        name: "Employee of Dumaguete",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 21,
        name: "Employee of Dumaguete",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 22,
        name: "Employee of Dumaguete",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 23,
        name: "Employee of Dumaguete",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 24,
        name: "Employee of Dumaguete",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 25,
        name: "Employee of Dumaguete",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: `
          <ul>
            <li>Over Two Decades of Experience in Corporate Life Insurance Industry</li>
        
            <li>Former Head of Philamlife in Strategic Planning, Corporate
              Solutions, Communications, Business Development, Risk
              Management, Agency Training</li>
        
            <li>Currently Operations & Business Development Manager of
              Sto. Domingo Associates, 2015-present</li>
          </ul>
        `,
      },
      {
        id: 26,
        name: "Employee of Dumaguete",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 27,
        name: "Employee of Dumaguete",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 28,
        name: "Employee of Dumaguete",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
    ],
  };

  const selectedBranchMembers = branchMembers[branch] || [];

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "200px",
    beforeChange: (current, next) => setImageIndex(next),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <CircleOpacity />
      <div className="CircleSliders">
        <Slider {...settings}>
          {selectedBranchMembers.map((img, idx) => (
            <div
              onClick={() => handleCardClick(img)}
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
              key={idx}
            >
              <div className="imageContainer">
                <img src={img.image} alt="" className="pfp rounded-circle" />
              </div>
              <div className="namerole">
                <h3>{img.name}</h3>
                <p>{img.role}</p>
              </div>
            </div>
          ))}
        </Slider>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPerson?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedPerson?.image}
              alt=""
              className="CardSliderImageInModal w-50 mb-3"
            />
            <div
              dangerouslySetInnerHTML={{ __html: selectedPerson?.details }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
