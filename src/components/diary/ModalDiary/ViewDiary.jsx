import React, { useState } from 'react'
import Modal from "react-modal";
import { useSelector } from 'react-redux';

const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)", // Adjust the alpha value for transparency
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
  

export default function ViewDiary({isOpen, onRequestClose}) {
  const data = useSelector(state => state.diary.data);
  const reverseData = data.slice().reverse()

  console.log(reverseData)

  return (
    <>
        <Modal
        isOpen={isOpen} // You can manage the modal's open/close state with props
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Diary Modal"
        >
            <div>
                {reverseData.map((diary, index) => (
                  <div className="flex items-center mb-4 hover:bg-sky-200 hover:rounded-md" key={index}>
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
  )
}
