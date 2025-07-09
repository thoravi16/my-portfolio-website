import React from "react";
import "./ShootingStars.css";

function ShootingStars() {
  return (
    <div className="shooting-stars-container">
      {[...Array(10)].map((_, i) => (
        <div className="shooting-star" key={i}></div>
      ))}
    </div>
  );
}

export default ShootingStars;
