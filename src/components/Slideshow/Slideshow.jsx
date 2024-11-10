import React, { useState } from "react";
import "./_slideshow.scss";
import arrowRight from "../../assets/images/arrow_right.png";
import arrowLeft from "../../assets/images/arrow_left.png";

function Slideshow({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour naviguer entre les images
  const showImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "next") {
        return prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? slides.length - 1 : prevIndex - 1;
      }
    });
  };

  return (
    <div className="slideshow">
      {slides && slides.length > 0 ? (
        <>
          <button
            onClick={() => showImage("prev")}
            className="arrow arrow-left"
          >
            <img src={arrowLeft} alt="arrow-left" />
          </button>
          <img
            className="slideshow-image"
            src={slides[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
          <button
            onClick={() => showImage("next")}
            className="arrow arrow-right"
          >
            <img src={arrowRight} alt="arrow-right" />
          </button>
        </>
      ) : (
        <p>Pas d'images disponibles</p>
      )}
    </div>
  );
}

export default Slideshow;
