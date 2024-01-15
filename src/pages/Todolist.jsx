import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar/Navbar";
import TodoCard from "../components/todo/TodoCard";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../libs/TodoSlice";

export default function Todolist() {
  const inputRef = useRef(null);
  const formRef = useRef(null);
  const data = useSelector((state) => state.todo.data);
  const dispatch = useDispatch();

  const handleAddTodo = (event) => {
    event.preventDefault(); // Prevents the page from refreshing
    dispatch(addTodo({
      task: inputRef.current.value,
      done: false,
    }));
    inputRef.current.value = "";
  }

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white border-t-2 rounded shadow-md p-10 m-4 w-full md:w-3/4">
            <div className="mb-4">
              <h1 className="text-grey-darkest text-2xl font-semibold">🔥 Todo List 🌟</h1>
              <form onSubmit={handleAddTodo} className="flex mt-7 mb-10">
                <input
                  ref={inputRef}
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  placeholder="Add Todo"
                  required
                />
                <button
                  className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
                  type="submit"
                >
                  Add
                </button>
              </form>
            </div>
            {data.map((task, index) => (
              !task.done && (
                <TodoCard
                  task={task.task}
                  state={task.done}
                  key={index}
                  id={task.id}
                />
              )
            ))}
          </div>
        </div>

        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white border-t-2 rounded shadow-md p-10 m-4 w-full md:w-3/4">
            <div className="mb-4">
              <h1 className="text-grey-darkest text-2xl font-semibold">✅ Done</h1>
            </div>
            {data.map((task, index) => (
              task.done && (
                <TodoCard
                  task={task.task}
                  state={task.done}
                  key={index}
                  id={task.id}
                />
              )
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
