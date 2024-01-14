import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar/Navbar";
import TodoCard from "../components/todo/TodoCard";
import data from "../data/todolist.json";

export default function Todolist() {
  // Use state to manage dynamic data
  const [done, setDone] = useState([]);
  const [notDone, setNotDone] = useState([]);
  const inputRef = useRef(null);
  const formRef = useRef(null);

  const classifyTasks = () => {
    const doneTasks = [];
    const notDoneTasks = [];

    data.forEach((task) => {
      if (task.done) {
        doneTasks.push(task);
      } else {
        notDoneTasks.push(task);
      }
    });

    // Update state with the classified tasks
    setDone(doneTasks);
    setNotDone(notDoneTasks);
  };

  useEffect(() => {
    classifyTasks();
  }, []);

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTask = inputRef.current.value;
    if (newTask.trim() !== "") {
      // Add new task to the notDone array
      setNotDone([{ task: newTask, done: false }, ...notDone]);
      // Clear the input field
      inputRef.current.value = "";
    }
  };

  const onDoneFunc = (task) => {
    const index = notDone.findIndex((t) => t.task === task);
    const newNotDone = [...notDone];
    newNotDone.splice(index, 1);
    setNotDone(newNotDone);

    const newDone = [...done];
    newDone.unshift({ task, done: true });
    setDone(newDone);
  };

  const onNotDoneFunc = (task) => {
    const index = done.findIndex((t) => t.task === task);
    const newDone = [...done];
    newDone.splice(index, 1);
    setDone(newDone);

    const newNotDone = [...notDone];
    newNotDone.unshift({ task, done: false });
    setNotDone(newNotDone);
  };

  const onRemoveFunc = (task) => {
    let index = done.findIndex((t) => t.task === task);
    if (index != -1) {
      const newDone = [...done];
      newDone.splice(index, 1);
      setDone(newDone);
      return;
    }

    index = notDone.findIndex((t) => t.task === task);
    if (index != -1) {
      const newNotDone = [...notDone];
      newNotDone.splice(index, 1);
      setNotDone(newNotDone);
      return;
    }
  };

  const onAddFunc = () => {
    const newNotDone = [...notDone];
    newNotDone.shift({ task: task, create_at: new Date(), done: false });
    setNotDone(newNotDone);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white border-t-2 rounded shadow-md p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
              <h1 className="text-grey-darkest">Todo List</h1>
              <form
                ref={formRef}
                onSubmit={handleAddTodo}
                className="flex mt-4"
              >
                <input
                  ref={inputRef}
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  placeholder="Add Todo"
                />
                <button
                  className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
                  type="submit"
                >
                  Add
                </button>
              </form>
            </div>
            {notDone.map((task, index) => (
              <TodoCard
                task={task.task}
                state={task.done}
                key={index}
                onTask={onDoneFunc}
                onRemove={onRemoveFunc}
              />
            ))}
          </div>
        </div>

        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white border-t-2 rounded shadow-md p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
              <h1 className="text-grey-darkest">Done</h1>
            </div>
            {done.map((task, index) => (
              <TodoCard
                task={task.task}
                state={task.done}
                key={index}
                onTask={onNotDoneFunc}
                onRemove={onRemoveFunc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
