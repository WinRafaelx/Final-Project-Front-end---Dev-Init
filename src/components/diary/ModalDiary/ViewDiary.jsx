import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%', // Adjusted width for responsiveness
    maxWidth: '600px', // Maximum width for larger screens
  },
};

const diariesPerPage = 10;

export default function ViewDiary({ isOpen, onRequestClose }) {
  const data = useSelector((state) => state.diary.data);
  const [currentPage, setCurrentPage] = useState(1);
  const totalDiaries = data.length;
  const totalPages = Math.ceil(totalDiaries / diariesPerPage);
  const startIndex = (currentPage - 1) * diariesPerPage;
  const endIndex = startIndex + diariesPerPage;
  const diariesToDisplay = data.slice(startIndex, endIndex);

  const navigate = useNavigate();

  const handleReadDiary = (id) => {
    navigate(`/readDiary?id=${id}`);
    onRequestClose();
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Diary Modal"
      >
        <div className="p-4">
          <div className="text-xl mb-4 font-semibold">All Diaries</div>
          {diariesToDisplay.map((diary, index) => (
            <div
              className="flex items-center mb-4 hover:bg-sky-200 hover:rounded-md"
              key={index}
              onClick={() => handleReadDiary(index)}
            >
              <p className="text-md text-gray-500 pr-4">{diary.date}</p>
              <p className="text-md text-gray-500 flex-grow">{diary.title}</p>
            </div>
          ))}
          <div className="flex flex-col items-center mt-6">
            <div className="flex justify-between w-full mb-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="text-gray-500 py-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
            <div className="w-full flex justify-center mt-3">
              <button
                className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded w-1/2"
                onClick={onRequestClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
