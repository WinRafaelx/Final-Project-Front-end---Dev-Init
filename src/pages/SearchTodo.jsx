import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import TodoCard from "../components/todo/TodoCard";

export default function SearchTodo() {
  const allData = useSelector((state) => state.todo.data);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Perform the search logic here
    if (searchQuery === "") {
      return;
    }
    const filteredResults = allData.filter((todo) =>
      todo.task.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [allData, searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white border-t-2 rounded shadow-md p-10 m-4 w-full md:w-3/4 max-sm:m-1 max-sm:p-7">
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <h1 className="text-grey-darkest text-2xl font-semibold max-sm:text-xl">
                  🔎 Search Todo 🕵🏻
                </h1>
                <button
                  className="flex-no-shrink p-2 border-2 border-lime-500 font-semibold text-lime-500 rounded text-teal border-teal hover:text-lime-700 hover:border-lime-700 hover:bg-teal"
                  onClick={() => navigate("/todolist")}
                >
                  Todo List 🔥
                </button>
              </div>
              <div
                className="my-10"
              >
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  placeholder="Keywords Ex. Homework, Jogging, ..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        {/* Display the filtered todo data */}
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white border-t-2 rounded shadow-md p-10 m-4 w-full md:w-3/4 max-sm:m-1 max-sm:p-7">
            <h2 className="text-grey-darkest text-2xl font-semibold mb-4">
              Search Results
            </h2>
            {filteredData.length === 0 ? (
              ""
            ) : (
              <div className="text-xl font-semibold my-5"> ❌ Not Done </div>
            )}
            {filteredData.map(
              (todo, index) =>
                !todo.done && (
                  <TodoCard
                    task={todo.task}
                    state={todo.done}
                    key={index}
                    id={todo.id}
                  />
                )
            )}
            {filteredData.length === 0 ? (
              ""
            ) : (
              <div className="text-xl font-semibold my-5"> ✅ Done </div>
            )}
            {filteredData.map(
              (todo, index) =>
                todo.done && (
                  <TodoCard
                    task={todo.task}
                    state={todo.done}
                    key={index}
                    id={todo.id}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
