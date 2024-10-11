import React from "react";
import "../styles.css";

export default function VehicleCard({ vehi }) {
  // to handle err. if no img available set the default img given
  const handleError = (evnt) => {
    evnt.target.src = "images/default.jpg";
  };

  // to set the color for rating
  const getRatingClass = (rating) => {
    //return rating >= 8 ? "rating-good" : "rating-bad";
    if (rating >= 8) return "rating-good";
    if (rating >= 5 && rating < 8) return "rating-ok";
    return "rating-bad";
  };

  return (
    <div key={vehi.id} className="movie-card">
      <img
        src={`images/${vehi.image}`}
        alt={vehi.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{vehi.title}</h3>
        <h5 className="movie-card-genre">{vehi.model}</h5>
        <p className="movie-card-genre">{vehi.genre}</p>
        <p className={`movie-card-rating ${getRatingClass(vehi.rating)}`}>
          {vehi.rating}
        </p>
      </div>
    </div>
  );
}
