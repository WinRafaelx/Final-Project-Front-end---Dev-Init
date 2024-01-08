import React from "react";
import Navbar from "../components/navbar/Navbar";
import Form from "../components/addplanner/Form";

function Addplanner() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-4">
        <Form />
      </div>
    </>
  );
}

export default Addplanner;
