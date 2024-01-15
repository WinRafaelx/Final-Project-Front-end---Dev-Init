import React, { useRef, useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import Select from "react-select";
import TextAreaAutoSize from "../diary/TextAreaAutoSize";
import { editDiary } from "../../libs/DiarySlice";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
  },
};

const options = [
  { value: "", label: "🧐 Today feeling", isDisabled: true },
  { value: "😇 So cool", label: "😇 So cool" },
  { value: "🤣 It's OK", label: "🤣 It's OK" },
  { value: "🥲 I wanna Cry", label: "🥲 I wanna Cry" },
  { value: "😤 So angry", label: "😤 So angry" },
];

export default function ModalEditDiary({
  isOpen,
  onRequestClose,
  date,
  title,
  emotion,
  content,
}) {
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const editedTitle = useRef(null);
  const editedDiary = useRef(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedEmotion(selectedOption.value);
  };

  const handleEdit = (event) => {
    event.preventDefault();
    if (!selectedEmotion) {
      setErrorMessage(
        <p className="text-red-500 text-sm mb-4">Please select your emotion</p>
      );
      return;
    }

    const titleValue = editedTitle.current.value;
    const diaryMessageValue = editedDiary.current.value;
    const emotion = selectedEmotion;

    dispatch(
      editDiary({
        date,
        title: titleValue,
        content: diaryMessageValue,
        emotion: emotion,
      })
    );

    editedTitle.current.value = "";
    editedDiary.current.value = "";
    setSelectedEmotion("");
    onRequestClose();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Todolist Modal"
      >
        <form onSubmit={handleEdit}>
          <div className="p-4">
            <div className="flex items-end max-sm:block mb-3">
            <div className="font-semibold text-2xl max-sm:mb-2 md:mr-3">Edit Diary </div>
            <div className="text-xl">{date}</div>
            </div>
            <div className="flex mb-5 justify-between items-center">
              <div className="max-sm:mr-2">
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
              ref={editedTitle}
              required
              placeholder="Title: Ex. The brave of hero"
              className="block p-2.5 mb-4 w-full text-xl text-black bg-slate-100 rounded-lg border border-gray-300"
            />
            <TextAreaAutoSize diaryMessage={editedDiary} />
          </div>
        </form>
      </Modal>
    </>
  );
}
