import React, { useState } from 'react';
import Modal from "react-modal";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
  },
};

export default function ViewDiary({ isOpen, onRequestClose }) {
  const data = useSelector(state => state.diary.data);
  const reverseData = data.slice().reverse();
  const navigate = useNavigate();

  const handleReadDiary = (id) => {
    navigate(`/readDiary?id=${id}`);
    onRequestClose();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Diary Modal"
      >
        <div className='p-4'>
          <div className='ml-8 text-xl mb-4 font-semibold'>All Diaries</div>
          {reverseData.map((diary, index) => (
            <div
              className="flex items-center mb-4 hover:bg-sky-200 hover:rounded-md"
              key={index}
              onClick={() => handleReadDiary(index)} // Provide a callback function
            >
              <p className="text-md text-gray-500 pl-8 pr-4">
                {diary.date}
              </p>
              <p className="text-md text-gray-500 px-8">
                {diary.title}
              </p>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
