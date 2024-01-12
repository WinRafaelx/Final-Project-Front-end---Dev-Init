import React from "react";
import Modal from "react-modal";
import { months } from "../../models/model";
import { removeEvent } from "../../libs/PlannerSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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

const ModalComponent = ({ closeModal, date, events }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const dateValue =`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  const dateValueNumberMonth = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

  const handleRemove = (index) => {
    dispatch(removeEvent({date, index: index}))
  }

  const handleAdd = (date) => {
    navigate("/planner/addplanner?dateVal=" + date)
    closeModal()
  }

  return (
    <Modal
      isOpen={true} // You can manage the modal's open/close state with props
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {/* content */}
      <div>
        {/* body */}
        <div className="text-center p-5 flex-auto justify-center">
          <h2 className="text-2xl font-bold py-3 mb-5">
            {dateValue}
          </h2>
          {events.map((event, index) => (
            <div className="flex items-center mb-4 justify-between" key={index}>
            <p className="text-xl text-gray-500 px-8">
              {event}
            </p>
            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-rose-600 border-rose-600 hover:text-slate-300 hover:border-slate-300"
            onClick={() => handleRemove(index)}>Remove</button>
          </div>
          ))}
          
        </div>
        {/* footer */}
        <div className="p-3 mt-2 text-center space-x-4 md:block">
        <button className="mb-2 md:mb-0 bg-green-500 border-2 rounded border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white hover:shadow-lg hover:bg-gray-100 hover:border-slate-200 hover:text-slate-500"
        onClick={() => handleAdd(dateValueNumberMonth)}>
            Add
          </button>
          <button className="mb-2 md:mb-0 bg-white px-5 py-2 rounded text-sm shadow-sm font-medium tracking-wider border-2 text-gray-600 hover:shadow-lg hover:bg-gray-100"
          onClick={closeModal}>
            Back
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
