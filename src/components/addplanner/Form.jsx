import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanner, addEvent } from "../../libs/PlannerSlice";
import { months } from "../../models/model";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const Form = () => {
  const [addOneMore, setAddOneMore] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dateVal } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const queryDate = queryParams.get("dateVal");

  // Create refs for date and task inputs
  const dateRef = useRef(null);
  const taskRef = useRef(null);

  useEffect(() => {
    if (queryDate != null) {
      const formattedDate = handleDateFormat(queryDate);
      dateRef.current.value = formattedDate;
    }
  }, [queryDate]);

  const handleDateFormat = (date) => {
    let [day, month, year] = date.split("-");
    if (day.length === 1) {
      day = "0" + day;
    }
    if (month.length === 1) {
      month = "0" + month;
    }

    return `${year}-${month}-${day}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Accessing the current values using refs
    const dateValue = dateRef.current.value;
    const taskValue = taskRef.current.value;

    const [year, month, date] = dateValue
      .split("-")
      .map((part) => parseInt(part, 10));

    taskRef.current.value = "";

    dispatch(
      addEvent({
        year: year,
        month: months[month - 1],
        date: date,
        task: taskValue,
      })
    );
    if (!addOneMore) {
      navigate("/planner");
    }
  };

  return (
    <form className="max-w-sm mx-auto mt-10" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="date" className="block mb-2 text-sm font-medium">
          Date:
        </label>
        <input
          type="date"
          id="date"
          ref={dateRef}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="task" className="block mb-2 text-sm font-medium">
          Task:
        </label>
        <input
          type="text"
          id="task"
          name="task"
          ref={taskRef}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Playing game, Coding, etc."
          required
        />
      </div>
      <div className="inline-flex items-center mb-3">
      <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
        <input
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
          id="check"
          onClick={() => setAddOneMore(!addOneMore)}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
        </span>
      </label>
      <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
        Add more than one task
      </label>
    </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm flex-grow px-5 py-2.5 text-center"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => navigate("/planner")}
          className="ml-2 text-white bg-rose-500 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm flex-grow px-5 py-2.5 text-center"
        >
          Back
        </button>
      </div>
    </form>
  );
};

export default Form;
