import React from "react";
import Navbar from "../components/navbar/Navbar";
import FormDiary from "../components/diary/FormDiary";

export default function Diary() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-4">
        <FormDiary />
      </div>
    </>
  );
}
