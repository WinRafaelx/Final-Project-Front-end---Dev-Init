import React from "react";
import Navbar from "../components/navbar/Navbar";
import Form from "../components/addplanner/Form";
import ThemeColor from "../components/ThemeColor";

function Addplanner() {
  const themeColor = ThemeColor();
  return (
    <div className={`h-screen ${themeColor}`}>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-4">
        <Form />
      </div>
    </div>
  );
}

export default Addplanner;
