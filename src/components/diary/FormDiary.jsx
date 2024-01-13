import React, { useState, useRef } from "react";
import Select from "react-select";
import { todayFormatted } from "../../models/model";
import Textarea from "./TextArea";
import { useSelector, useDispatch, connect } from "react-redux";
import { addDiary } from "../../libs/DiarySlice";
import { todayDiaryFormatted } from "../../models/model";

export default function FormDiary() {
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const title = useRef('');
  const diaryMessage = useRef('');
  const dispatch = useDispatch();
  const data = useSelector(state => state.diary.data);

  const alreadyDiary = data.find((diary) => diary.date === todayDiaryFormatted);

  const options = [
    { value: "", label: "Today feeling", isDisabled: true },
    { value: "So cool", label: "So cool" },
    { value: "It's OK", label: "It's OK" },
    { value: "I wanna Cry", label: "I wanna Cry" },
    { value: "So angry", label: "So angry" },
  ];

  const handleCountryChange = (selectedOption) => {
    setSelectedEmotion(selectedOption.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedEmotion) {
      setErrorMessage(
        <p className="text-red-500 text-sm mb-4">
          Please select your emotion
        </p>
      );
      return;
    }

    const titleValue = title.current.value;
    const diaryMessageValue = diaryMessage.current.value;
    const emotion = selectedEmotion;

    title.current.value = "";
    diaryMessage.current.value = "";
    setSelectedEmotion("");
    setErrorMessage("");

    dispatch(addDiary({
      date: todayDiaryFormatted,
      title: titleValue,
      emotion: emotion,
      content: diaryMessageValue,
    }))
  }
  
  return (
    <>
    {alreadyDiary ? (
      <div
      className="text-2xl mt-3">🥰 You have alreay write today diary 😄</div>
    ): (
    <form onSubmit={handleSubmit}>
      <div className="flex mb-4 items-end">
        <h1 className="text-2xl font-semibold mr-2 ">Dairy </h1>
        <p className="text-xl text-slate-400"> {todayFormatted}</p>
      </div>
      <div className="flex mb-5 justify-between	">
        <div>
          <Select
            value={options.find((option) => option.value === selectedEmotion)}
            onChange={handleCountryChange}
            options={options}
            className="w-full"
          />
        </div>
        <div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Diary
          </button>
        </div>
      </div>
      {errorMessage}
      <input type="text" ref={title} required placeholder="Title: Ex. The brave of hero"
        className="block p-2.5 mb-4 w-full text-xl text-black bg-slate-100 rounded-lg border border-gray-300"
      />
      <Textarea diaryMessage={diaryMessage} />
    </form>
    )}
    </>
  );
}
