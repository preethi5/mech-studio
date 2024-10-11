import React from "react";
import "../styles.css";

export default function Header() {
  // should return ony one html element. no siblings
  // use this <> </> as a parent and empty element

  return (
    <>
      <div className="header">
        <img className="logo" src="logo.png" alt="moviedux" />
        <h2 className="app-subtitle">
          Welcome to Mech-Studio world! Find your favorite vehicle!!! Vroom...
          Vroom...
        </h2>
      </div>
    </>
  );
}
