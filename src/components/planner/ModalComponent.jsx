import React from "react";
import Modal from "react-modal";
import { months } from "../../models/model";
import { removeEvent } from "../../libs/PlannerSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    maxWidth: "500px", // Maximum width for larger screens
  },
};

const ModalComponent = ({ closeModal, date, events }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dateValue = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  const dateValueNumberMonth = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

  const handleRemove = (index) => {
    dispatch(removeEvent({ date, index: index }));
  };

  const handleAdd = (date) => {
    navigate("/planner/addplanner?dateVal=" + date);
    closeModal();
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Planner Modal"
    >
      <div>
        <div className="text-center p-5 flex-auto justify-center overflow-y-auto max-h-96">
          <h2 className="text-2xl font-bold py-3 mb-5">{dateValue}</h2>
          {events.map((event, index) => (
            <div className="flex flex-col sm:flex-row items-center my-4 sm:justify-between max-sm:bg-slate-100 max-sm:p-4 max-sm:rounded" key={index}>
              <p className="text-xl text-gray-500 sm:mr-8 mb-2 sm:mb-0">
                {event}
              </p>
              <button
                className="flex-no-shrink p-2 ml-2 border-2 rounded text-rose-600 border-rose-600 hover:text-slate-300 hover:border-slate-300"
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="p-3 mt-2 text-center space-y-4 md:space-y-0 md:flex md:justify-center">
          <button
            className="w-full md:w-auto bg-green-500 border-2 rounded border-green-500 px-5 py-2 mx-2 text-sm shadow-sm font-medium tracking-wider text-white hover:shadow-lg hover:bg-gray-100 hover:border-slate-200 hover:text-slate-500"
            onClick={() => handleAdd(dateValueNumberMonth)}
          >
            Add
          </button>
          <button
            className="w-full md:w-auto bg-white px-5 py-2 rounded text-sm shadow-sm font-medium mx-2 tracking-wider border-2 text-gray-600 hover:shadow-lg hover:bg-gray-100"
            onClick={closeModal}
          >
            Back
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
