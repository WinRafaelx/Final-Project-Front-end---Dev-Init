import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanner, addEvent } from "../../libs/PlannerSlice";
import { months } from "../../models/model";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const Form = () => {
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
    let [day, month, year] = date.split("-")
    if (day.length === 1) {
      day = "0" + day
    }
    if (month.length === 1) {
      month = "0" + month
    }

    return `${year}-${month}-${day}`
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Accessing the current values using refs
    const dateValue = dateRef.current.value;
    const taskValue = taskRef.current.value;

    const [year, month, date] = dateValue.split("-").map(part => parseInt(part, 10));

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
