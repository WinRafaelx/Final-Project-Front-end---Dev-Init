import React, { useState } from "react";
import ModalComponent from "./ModalComponent";

const DayCell = ({ day, thismonth, events }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <td
        className={`border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-400
        ${thismonth ? "bg-white" : "bg-slate-300"}`}
        onClick={openModal}
      >
        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden relative">
          <div className="top h-5 w-full">
            <span className="text-gray-500">{day.getDate()}</span>
          </div>
          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer hidden sm:block">
            {/* Render events or other content for the day */}
            {events.map((event, index) => (
              <div
                key={index}
                className="text-white bg-orange-400 rounded p-1 m-1"
              >
                {event}
              </div>
            ))}
          </div>
          <span
            className={`absolute bottom-0 right-0 p-1 text-white bg-red-500 rounded-full block sm:hidden flex items-center justify-center
              ${thismonth && events.length > 0 ? "" : "hidden"}`}
            style={{ width: "30px", height: "30px" }}
          >
            {events.length > 0 ? events.length : ""}
          </span>
        </div>
      </td>
      {showModal && (
        <ModalComponent closeModal={closeModal} date={day} events={events} />
      )}
    </>
  );
};

export default DayCell;
