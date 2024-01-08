import React, { useEffect, useState } from "react";
import MonthView from "./MonthView";
import { months } from "./utils";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
  const [nowMonth, setNowMonth] = useState(new Date().getMonth() + 1);
  const [thisYear, setThisYear] = useState(new Date().getFullYear());
  const navigate = useNavigate();

  const nextMonth = () => {
    if (nowMonth === 12) {
      setNowMonth(1);
      setThisYear(thisYear + 1);
    } else {
      setNowMonth(nowMonth + 1);
    }
  };

  const prevMonth = () => {
    if (nowMonth === 1) {
      setNowMonth(12);
      setThisYear(thisYear - 1);
    } else {
      setNowMonth(nowMonth - 1);
    }
  };

  const addEvent = () => { 
    navigate("/planner/addplanner");
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="wrapper bg-white rounded shadow w-full">
        <div className="flex items-center justify-between p-4 border-b">
          <button
            className="px-2 py-1 border rounded hover:bg-gray-200"
            onClick={prevMonth}
          >
            Prev
          </button>
          <div className="flex justify-center items-center">
            <h2 className="text-xl font-semibold">
              {months[nowMonth - 1]} {thisYear}
            </h2>
            <button
              className="ms-2 px-2 py-1 font-normal border-2 border-green-600 text-green-600 rounded hover:bg-gray-200"
              onClick={addEvent}
            >
              Add
            </button>
          </div>

          <button
            className="px-2 py-1 border rounded hover:bg-gray-200"
            onClick={nextMonth}
          >
            Next
          </button>
        </div>
        <MonthView month={nowMonth} year={thisYear} />
      </div>
    </div>
  );
};

export default Calendar;
