import React from "react";
import Navbar from "../components/navbar/Navbar";
import FormDiary from "../components/diary/FormDiary";
import ThemeColor from "../components/ThemeColor";

export default function Diary() {
  const themeColor = ThemeColor();
  return (
    <div className={`h-screen ${themeColor}`}>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-4">
        <FormDiary />
      </div>
    </div>
  );
}
