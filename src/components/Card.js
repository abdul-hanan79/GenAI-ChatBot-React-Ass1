// src/components/Card.js
import React from "react";
import "../styles/Card.css";

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
