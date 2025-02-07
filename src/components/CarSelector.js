import React, { useState } from "react";
import "../css/CarSelector.css";

// Importing images from src/img folder
import BRV from "../img/BRV.jpg";
import Civic from "../img/civic.webp";
import HRV from "../img/hrv.webp";
import CRV from "../img/crv.webp";
import Accord from "../img/accord.webp";

// Car data array
const cars = [
  {
    name: "BR-V",
    image: BRV,
    title: "Honda BR-V i-VTEC S (CVT)",
    price: "Starting From PKR 6,299,000",
    details: "*For detailed price kindly use price calculator"
  },
  {
    name: "Civic",
    image: Civic,
    title: "Honda Civic RS Turbo",
    price: "Starting From PKR 8,599,000",
    details: "*For detailed price kindly use price calculator"
  },
  {
    name: "HR-V",
    image: HRV,
    title: "Honda HR-V VTi-S",
    price: "Starting From PKR 7,899,000",
    details: "*For detailed price kindly use price calculator"
  },
  {
    name: "CR-V",
    image: CRV,
    title: "Honda CR-V 2.0 CVT",
    price: "Starting From PKR 10,500,000",
    details: "*For detailed price kindly use price calculator"
  },
  {
    name: "Accord",
    image: Accord,
    title: "Honda Accord 1.5 Turbo",
    price: "Starting From PKR 15,499,000",
    details: "*For detailed price kindly use price calculator"
  }
];

const CarSelector = () => {
  const [selectedCar, setSelectedCar] = useState(cars[0]);

  return (
    <div className="car-selector">
      <h2>
        Find Your <span className="highlight">Honda</span> Car
      </h2>
      <div className="tabs">
        {cars.map((car) => (
          <button
            key={car.name}
            className={`tab ${selectedCar.name === car.name ? "active" : ""}`}
            onClick={() => setSelectedCar(car)}
          >
            {car.name}
          </button>
        ))}
      </div>
      <div className="car-details">
        <img src={selectedCar.image} alt={selectedCar.name} className="car-image" />
        <h3>{selectedCar.title}</h3>
        <p className="price">{selectedCar.price}</p>
        <p className="details">{selectedCar.details}</p>
        <button className="explore-btn">Explore More &gt;</button>
      </div>
    </div>
  );
};

export default CarSelector;