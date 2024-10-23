import React from "react";
import "../styles.css";
import VehicleCard from "./VehicleCard";

export default function TestDriveList({
  vehicles,
  testDriveList,
  toggleTestDriveList,
}) {
  if (testDriveList.length === 0) {
    return (
      <div>
        <h5>Your Test Drive List is empty...</h5>
      </div>
    );
  }
  return (
    <div>
      <h1 className="title">Your Test Drive List</h1>
      <div className="watchlist">
        {testDriveList.map((id) => {
          const veh = vehicles.find((v) => v.id === id);
          return (
            <VehicleCard
              key={id}
              vehi={veh}
              toggleTestDriveList={toggleTestDriveList}
              isTestDriven={true}
            ></VehicleCard>
          );
        })}
      </div>
    </div>
  );
}
