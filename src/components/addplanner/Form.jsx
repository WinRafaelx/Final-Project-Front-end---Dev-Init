import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanner, addEvent } from "../../libs/PlannerSlice";
import { months } from "../../models/model";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const planner = useSelector(getPlanner);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Create refs for date and task inputs
  const dateRef = useRef(null);
  const taskRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Accessing the current values using refs
    const dateValue = dateRef.current.value;
    const taskValue = taskRef.current.value;

    const [year, month, date] = dateValue.split("-").map(Number);

    dateRef.current.value = "";
    taskRef.current.value = "";

    dispatch(
      addEvent({
        year: year,
        month: months[month - 1],
        date: date,
        task: taskValue,
      })
    );
      navigate("/planner");
  };
  console.log(planner);

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
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
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
