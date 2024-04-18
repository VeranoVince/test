import styled, { createGlobalStyle } from "styled-components";

export const SlideImageStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}

:root {
  --primary: #6a59ff;
  --white: #ffffff;
  --bg: #f5f5f5;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}


::-webkit-scrollbar {
  width: 1.3rem;
}

::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background: #797979;
  transition: all 0.5s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
  background: #222224;
}

::-webkit-scrollbar-track {
  background: #f9f9f9;
}

body {
  font-size: 1.6rem;
  background: var(--bg);
}
.container {
  max-width: 132.5rem;
  padding: 4rem 1rem;
  margin: 0 auto;
}

.swiper_container {
  height: 50rem;
  padding: 2rem 0;
  position: relative;
}

.swiper-slide {
  width: 37rem;
  height: 42rem;
  position: relative;
}

@media (max-width: 500px) {
  .swiper_container {
    height: 47rem;
  }
  .swiper-slide {
    width: 28rem !important;
    height: 36rem !important;
  }
  .swiper-slide img {
    width: 28rem !important;
    height: 36rem !important;
  }
}

.swiper-slide img {
  width: 34.5rem;
  height: 34.5rem;
  border-radius: 2rem;
  object-fit: cover;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.9); /* Add shadow effect */
}

.swiper-slide-shadow-left,
.swiper-slide-shadow-right {
  display: none;
}

.slider-controler {
  position: relative;
  bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-controler .swiper-button-next {
  left: 58% !important;
  transform: translateX(-58%) !important;
}

@media (max-width: 990px) {
  .slider-controler .swiper-button-next {
    left: 70% !important;
    transform: translateX(-70%) !important;
  }
}

@media (max-width: 450px) {
  .slider-controler .swiper-button-next {
    left: 80% !important;
    transform: translateX(-80%) !important;
  }
}

@media (max-width: 990px) {
  .slider-controler .swiper-button-prev {
    left: 30% !important;
    transform: translateX(-30%) !important;
  }
}

@media (max-width: 450px) {
  .slider-controler .swiper-button-prev {
    left: 20% !important;
    transform: translateX(-20%) !important;
  }
}

.slider-controler .slider-arrow {
  background: #ffffff;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  left: 42%;
  transform: translateX(-42%);
  filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
}

.slider-controler .slider-arrow ion-icon {
  font-size: 2rem;
  color: #222224;
}

.slider-controler .slider-arrow::after {
  content: "";
}



`;

export const CircleOpacity = createGlobalStyle`

.CircleSliders {
  width: 100%;
  margin: 2rem auto;
  height: 570px;
}

.slide img {
  width: 15rem;
  margin: 2rem auto;
}

.slide {
  transform: scale(0.6);
  transition: transform 300ms;
  opacity: 0.5;
}

.activeSlide {
  transform: scale(1.1);
  opacity: 1;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  color: black;
  font-size: 24px;
  cursor: pointer;
}

.prev {
  left: 20px; /* Adjust as needed */
}

.next {
  right: 20px; /* Adjust as needed */
}

.namerole {
  text-align: center;
}
`;
