import { useParams } from "react-router-dom";
import { handleError } from "../utils/Utils";

export default function VehicleDetails({ vehicles }) {
  const { id } = useParams();
  console.log(id);

  const getVehicleById = (id) => {
    return vehicles.find((vehicle) => vehicle.id === id);
  };
  const vehicle = getVehicleById(parseInt(id));

  return (
    <div className="details-div">
      <h1>Vehicle Details</h1>
      {vehicle ? (
        <div>
          <img
            src={`images/${vehicle.image}`}
            alt={vehicle.title}
            // onError={handleError}
          />
          <h3>Title: {vehicle.title}</h3>
          <p>Model: {vehicle.model}</p>
          <p>Vehicle Type: {vehicle.type}</p>
          <p>Vehicle Rating: {vehicle.rating}</p>
        </div>
      ) : (
        <p>Loading vehicle details...</p>
      )}
    </div>
  );
}
