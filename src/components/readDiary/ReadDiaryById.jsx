import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import ViewDiary from "../diary/ModalDiary/ViewDiary";
import ModalEditDiary from "./ModalEditDiary";

export default function ReadDiaryById() {
  const data = useSelector((state) => state.diary.data);
  const reverseData = data.slice().reverse();

  const [checkAbleBack, setCheckAbleBack] = useState(true);
  const [checkAbleNext, setCheckAbleNext] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const Id = queryParams.get("id");

  const useDiary = reverseData[Id];

  useEffect(() => {
    if (Id >= reverseData.length - 1) {
      setCheckAbleNext(false);
    } else {
      setCheckAbleNext(true);
    }
    if (Id <= 0) {
      setCheckAbleBack(false);
    } else {
      setCheckAbleBack(true);
    }
  }, [Id]);

  const handleBack = () => {
    if (Id <= 0) {
      return;
    }
    navigate(`/readDiary?id=${parseInt(Id) - 1}`);
  };

  const handleNext = () => {
    if (Id >= reverseData.length - 1) {
      return;
    }
    navigate(`/readDiary?id=${parseInt(Id) + 1}`);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openEditModal = () => {
    setEditModal(true);
  }

  const closeEditModal = () => {
    setEditModal(false);
  }

  return (
    <div>
      {useDiary ? (
        <div>
          <div className="text-center flex justify-center">
            <button
              className="mb-5 mr-2 mt-5 px-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 hover:bg-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              onClick={openModal}
            >
              Read your Old Diary
            </button>
            <button
              className="mb-5 ml-2 mt-5 px-10 text-white bg-sky-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 hover:bg-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              onClick={() => navigate("/diary")}
            >
              Write today diary
            </button>
          </div>
          <ViewDiary isOpen={showModal} onRequestClose={closeModal} />
          <div className="flex items-center justify-between mb-10 mt-5">
            <button
              className={`hover:bg-amber-700 bg-orange-400 px-5 py-2 rounded-md text-white ${
                checkAbleBack ? "" : "opacity-50 cursor-not-allowed"
              }`}
              onClick={handleBack}
            >
              Back
            </button>
            <div className="text-xl">{useDiary.date}</div>
            <button
              className={`hover:bg-red-700 bg-rose-500 px-5 py-2 rounded-md text-white ${
                checkAbleNext ? "" : "opacity-50 cursor-not-allowed"
              }`}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
          <div className="flex justify-between my-5">
            <div className="flex items-center">
              <div className="text-4xl mr-3">🗒️ </div>
              <div className="text-2xl">{useDiary.title}</div>
            </div>
            <div className="text-2xl">{useDiary.emotion}</div>
          </div>
          <div className="text-xl ">{useDiary.content}</div>
          <button
          className="p-2 bg-rose-500 rounded-md text-white mt-10 px-10 w-full sm:w-auto hover:bg-rose-800"
          onClick={() => openEditModal()}
        >
          Edit
        </button>
        <ModalEditDiary isOpen={editModal} onRequestClose={closeEditModal} date={useDiary.date} title={useDiary.title} emotion={useDiary.emotion} content={useDiary.content} />
        </div>
      ) : (
        <div className="">
          <div className="text-3xl mt-10 text-center">
            Not found diary in this date 
          </div>
        </div>
      )}
    </div>
  );
}
