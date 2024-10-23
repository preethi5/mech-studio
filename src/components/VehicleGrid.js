import React, { useState } from "react";
import "../styles.css";
import VehicleCard from "./VehicleCard";

export default function VehicleGrid({
  vehicles,
  testDriveList,
  toggleTestDriveList,
}) {
  const [searchStr, setSearchStr] = useState("");
  const [genre, setGenre] = useState("All Genre");
  const [rating, setRating] = useState("All Rating");
  const [type, setType] = useState("All Types");

  const handleSearchChange = (eve) => {
    setSearchStr(eve.target.value);
  };

  const handleGenreChange = (eve) => {
    setGenre(eve.target.value);
  };

  const handleTypeChange = (eve) => {
    setType(eve.target.value);
  };

  const handleRatingChange = (eve) => {
    setRating(eve.target.value);
  };

  const matchedGenre = (veh, genre) => {
    return (
      genre === "All Genre" || veh.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchedType = (veh, type) => {
    return (
      type === "All Types" || veh.type.toLowerCase() === type.toLowerCase()
    );
  };

  const matchedSearchString = (veh, searchStr) => {
    return veh.title.toLowerCase().includes(searchStr.toLowerCase());
  };

  const matchedRating = (vehi, rating) => {
    switch (rating) {
      case "All Rating":
        return true;

      case "Good":
        return vehi.rating > 8;

      case "Ok":
        return vehi.rating >= 5 && vehi.rating < 8;

      case "Bad":
        return vehi.rating < 5;

      default:
        return false;
    }
  };
  const filteredVehicles = vehicles.filter(
    (vehi) =>
      matchedGenre(vehi, genre) &&
      matchedType(vehi, type) &&
      matchedRating(vehi, rating) &&
      matchedSearchString(vehi, searchStr)
  );

  if (filteredVehicles.length === 0) {
    return (
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Search Vehicles..."
          value={searchStr}
          onChange={handleSearchChange}
        />
        <br />
        No Vechile found...
      </div>
    );
  }
  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search Vehicles..."
        value={searchStr}
        onChange={handleSearchChange}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genre</option>
            <option>Sporty</option>
            <option>Premium</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Types</label>
          <select
            className="filter-dropdown"
            value={type}
            onChange={handleTypeChange}
          >
            <option>All Types</option>
            <option>Bike</option>
            <option>Car</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All Rating</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredVehicles.map((vehi) => (
          // Pass id also as an unique identifier
          <VehicleCard
            vehi={vehi}
            key={vehi.id}
            toggleTestDriveList={toggleTestDriveList}
            isTestDriven={testDriveList.includes(vehi.id)}
          />
        ))}
      </div>
    </div>
  );
}
