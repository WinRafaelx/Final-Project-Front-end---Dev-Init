import React, { useState, useRef } from "react";
import Select from "react-select";
import { todayFormatted } from "../../models/model";
import TextAreaAutoSize from "./TextAreaAutoSize";
import { useSelector, useDispatch, connect } from "react-redux";
import { addDiary } from "../../libs/DiarySlice";
import ViewDiary from "./ModalDiary/ViewDiary";
import { todayDiaryFormatted } from "../../models/model";

export default function FormDiary() {
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const title = useRef("");
  const diaryMessage = useRef("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.diary.data);

  const alreadyDiary = data.find((diary) => diary.date === todayDiaryFormatted);

  const options = [
    { value: "", label: "🧐 Today feeling", isDisabled: true },
    { value: "😇 So cool", label: "😇 So cool" },
    { value: "🤣 It's OK", label: "🤣 It's OK" },
    { value: "🥲 I wanna Cry", label: "🥲 I wanna Cry" },
    { value: "😤 So angry", label: "😤 So angry" },
  ];

  const handleCountryChange = (selectedOption) => {
    setSelectedEmotion(selectedOption.value);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedEmotion) {
      setErrorMessage(
        <p className="text-red-500 text-sm mb-4">Please select your emotion</p>
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

    dispatch(
      addDiary({
        date: todayDiaryFormatted,
        title: titleValue,
        emotion: emotion,
        content: diaryMessageValue,
      })
    );
  };

  return (
    <div className="bg-white px-5 pb-10 rounded">
      <div className="text-center ">
        <button
          className="mb-3 mt-5 px-10 text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-red-300 hover:bg-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          onClick={openModal}
        >
          Read your Old Diary
        </button>
      </div>
      <ViewDiary isOpen={showModal} onRequestClose={closeModal} />
      {alreadyDiary ? (
        <div className="text-2xl mt-3">
          🥰 You have alreay write today diary 😄
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex mb-4 items-end">
            <h1 className="text-2xl font-semibold mr-2 ">Dairy </h1>
            <p className="text-xl text-slate-400"> {todayFormatted}</p>
          </div>
          <div className="flex mb-5 justify-between	">
            <div>
              <Select
                value={options.find(
                  (option) => option.value === selectedEmotion
                )}
                onChange={handleCountryChange}
                options={options}
                className="w-full"
              />
            </div>
            <div>
              <button
                type="submit"
                className="text-white bg-rose-500 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Add Diary
              </button>
            </div>
          </div>
          {errorMessage}
          <input
            type="text"
            ref={title}
            required
            placeholder="Title: Ex. The brave of hero"
            className="block p-2.5 mb-4 w-full text-xl text-black bg-slate-100 rounded-lg border border-gray-300"
          />
          <TextAreaAutoSize diaryMessage={diaryMessage} />
        </form>
      )}
    </div>
  );
}
