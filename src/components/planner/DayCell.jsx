import React from 'react';

const DayCell = ({ day, thismonth }) => {
  return (
    <td className={
        `border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-400
        ${thismonth ? 'bg-white' : 'bg-slate-300'}`
    }>
      <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
        <div className="top h-5 w-full">
          <span className="text-gray-500">{day}</span>
        </div>
        <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
          {/* Render events or other content for the day */}
          
        </div>
      </div>
    </td>
  );
};

export default DayCell;
