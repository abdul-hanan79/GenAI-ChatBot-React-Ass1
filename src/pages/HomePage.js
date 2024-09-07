// src/pages/HomePage.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
// import "../styles/HomePage.css ";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="card-container">
        <Card
          title="Card 1"
          description="This is the first card."
          image="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?cs=srgb&dl=pexels-trace-707046.jpg&fm=jpg"
        />
        <Card
          title="Card 2"
          description="This is the second card."
          image="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?cs=srgb&dl=pexels-trace-707046.jpg&fm=jpg"
        />
        <Card
          title="Card 3"
          description="This is the third card."
          image="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?cs=srgb&dl=pexels-trace-707046.jpg&fm=jpg"
        />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
