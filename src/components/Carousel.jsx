import React, { useState, useEffect } from "react";
import { LeftBtnIcon, RightBtnIcon } from "../assets/Icons";

const Carousel = () => {
  const slides = [
    {
      image: "/Slide-1.png",
      title: "Latest News & Updates",
      content:
        "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    },
    {
      image: "/Slide-2.png",
      title: "Latest News & Updates",
      content:
        "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    },
    {
      image: "/Slide-3.png",
      title: "Latest News & Updates",
      content:
        "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(
        currentIndex === 0 ? slides.length - 1 : currentIndex - 1,
      );
      setFade(false);
    }, 300);
  };

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1,
      );
      setFade(false);
    }, 300);
  };

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);

  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchStartX - touchEndX < -50) {
      prevSlide();
    }
  };

  return (
    <div
      className="relative w-full mx-auto"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden rounded-[5px] relative w-full h-full">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        />

        <div className="absolute bottom-0 w-full px-4 py-8 text-[white] bg-gradient-to-t from-[black] via-[transparent] to-[transparent] bg-opacity-30">
          <h3 className="">{slides[currentIndex].title}</h3>
          <p className="text-[12px] leading-4 font-normal">
            {slides[currentIndex].content}
          </p>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2"
      >
        <LeftBtnIcon />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2"
      >
        <RightBtnIcon />
      </button>

      <div className="absolute bottom-4 w-full flex justify-center gap-1">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-[3px] rounded-full bg-[white] transition-opacity duration-300 ${
              currentIndex === index ? "opacity-100" : "opacity-30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
