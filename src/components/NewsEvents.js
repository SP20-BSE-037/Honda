import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../css/NewsEvents.css";

// Import images (Replace with actual image paths)
import image1 from "../img/news2.webp";
import image2 from "../img/news3.webp";
import image3 from "../img/news4.webp";
import image4 from "../img/news5.webp";
import image5 from "../img/news6.webp";

const newsEvents = [
  { image: image1, title: "Honda Atlas Cars (Pakistan) Ltd. Marks 30 Years of Excellence", link: "/" },
  { image: image2, title: "Honda Introduces Special Internet Data Package", link: "/" },
  { image: image3, title: "Honda Launches New Hybrid Model", link: "/" },
  { image: image4, title: "Honda's Safety Awards Event", link: "/" },
  { image: image5, title: "Honda Sponsors Auto Show 2025", link: "/" },
];

const NewsEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide (increment by 2)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % newsEvents.length);
  };

  // Function to go to the previous slide (decrement by 2)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + newsEvents.length) % newsEvents.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="news-events-slider">
      <h2 className="title">News & Events</h2>
      <div className="slider-container">
        <button className="arrow left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className="grid-container">
          {[0, 1].map((offset) => {
            const index = (currentIndex + offset) % newsEvents.length;
            return (
              <div key={index} className="news-event-item">
                <img src={newsEvents[index].image} alt={newsEvents[index].title} className="news-event-image" />
                <h3 className="news-event-title">{newsEvents[index].title}</h3>
                <a href={newsEvents[index].link} className="read-more">Read Details</a>
              </div>
            );
          })}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      
    </div>
  );
};

export default NewsEvents;
