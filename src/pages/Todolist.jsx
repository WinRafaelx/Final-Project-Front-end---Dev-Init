import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Todo from "../components/todo/todo";
import data from "../data/todolist.json";

export default function Todolist() {
  // Use state to manage dynamic data
  const [done, setDone] = useState([]);
  const [notDone, setNotDone] = useState([]);

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

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-4">
        {/* Pass the done and notDone arrays as props to the Todo component */}
        <Todo data={notDone} task="Not Done"/>
        <Todo data={done} task="Done"/>
      </div>
    </>
  );
}
