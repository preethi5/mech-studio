import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VehicleGrid from "./components/VehicleGrid";
import TestDriveList from "./components/TestDriveList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [vehicles, setVehicle] = useState([]);
  const [testDriveList, setTestDriveList] = useState([]);

  useEffect(() => {
    fetch("vehicles.json")
      .then((resp) => resp.json())
      .then((data) => setVehicle(data));
  }, []); // [] --> means when to repeat this effect. [] - load only one time

  const toggleTestDriveList = (vehicleId) => {
    setTestDriveList((prev) =>
      prev.includes(vehicleId)
        ? prev.filter((id) => id !== vehicleId)
        : [...prev, vehicleId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header></Header>

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/testdrivelist">Test Drive - Done</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <VehicleGrid
                  vehicles={vehicles}
                  testDriveList={testDriveList}
                  toggleTestDriveList={toggleTestDriveList}
                />
              }
            ></Route>
            <Route
              path="/testdrivelist"
              element={
                <TestDriveList
                  vehicles={vehicles}
                  testDriveList={testDriveList}
                  toggleTestDriveList={toggleTestDriveList}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
      {/* should be entire width so no need of container */}
      <Footer></Footer>
    </div>
  );
}

export default App;
