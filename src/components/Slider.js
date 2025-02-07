import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../css/Slider.css"; // Make sure to create this CSS file

// Import images (Replace with actual image paths)
import image1 from "../img/slide1.webp";
import image2 from "../img/slide2.webp";
import image3 from "../img/slide3.webp";
import image4 from "../img/slide4.webp";
import image5 from "../img/slide5.webp";
import image6 from "../img/slide6.webp";

const images = [image1, image2, image3, image4, image5, image6];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <button className="arrow left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <div className="slide-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      <button className="arrow right" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      {/* Navigation Dots (Moved outside slide-container) */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
