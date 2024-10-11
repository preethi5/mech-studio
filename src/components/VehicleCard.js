import React from "react";
import "../styles.css";

export default function VehicleCard({
  vehi,
  isTestDriven,
  toggleTestDriveList,
}) {
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
        <div>
          <h3 className="movie-card-title">{vehi.title}</h3>
          <h5 className="movie-card-genre">{vehi.model}</h5>
        </div>
        <div>
          <span className="movie-card-genre">{vehi.genre}</span>
          <span className={`movie-card-rating ${getRatingClass(vehi.rating)}`}>
            {vehi.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isTestDriven}
            onChange={() => toggleTestDriveList(vehi.id)}
          ></input>
          <span className="slider">
            <span className="slider-label">
              {isTestDriven ? "Test Drive Done" : "Add to Test Drive List"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
