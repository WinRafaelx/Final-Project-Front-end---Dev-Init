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
  

export default function DiaryRead({isOpen, onRequestClose}) {
  const data = useSelector(state => state.diary.data);
  const reverseData = data.slice().reverse()


  return (
    <>
        <Modal
        isOpen={isOpen} // You can manage the modal's open/close state with props
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Diary Modal"
        >
            <div>
                Meow
            </div>
        </Modal>
    </>
  )
}
