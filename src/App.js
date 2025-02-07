import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import CarSelector from "./components/CarSelector";
import NewsEvents from "./components/NewsEvents";
import Footer from "./components/Footer";




function App() {
  return (
    <div>
      <Navbar />
      <Slider/>
      <CarSelector/>
      <NewsEvents/>
      <Footer/>
     
  
    </div>
  );
}

export default App;
