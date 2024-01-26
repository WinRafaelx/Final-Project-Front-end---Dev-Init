import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editTodo } from "../../libs/TodoSlice";

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
    width: "90%", // Adjusted width for responsiveness
    maxWidth: "400px", // Maximum width for larger screens
  },
};

export default function ModalEdit({ isOpen, onRequestClose, task, id }) {
  const dispatch = useDispatch();
  const editedTask = useRef(null);

  const handleEdit = (event) => {
    event.preventDefault();
    dispatch(
      editTodo({
        id: id,
        task: editedTask.current.value,
      })
    );
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
        <div className="p-4">
          <div className="font-semibold text-2xl mb-4">Edit Todolist</div>
          <div className="mb-6">
            <div className="flex flex-col text-xl mb-4">
              <div className="font-semibold">Old task:</div>
              <div className="text-gray-500">{task}</div>
            </div>
            <form onSubmit={handleEdit}>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-grey-darker"
                ref={editedTask}
                placeholder="Edited Task"
                required
              />
              <div className="flex flex-col sm:flex-row justify-between">
                <button
                  className="flex-no-shrink mb-2 sm:mb-0 p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
                  type="button"
                  onClick={onRequestClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
