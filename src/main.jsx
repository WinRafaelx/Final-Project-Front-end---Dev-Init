// Import necessary dependencies
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Updated imports
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Planner from "./pages/Planner.jsx";
import Todolist from "./pages/Todolist.jsx";
import AddDiary from "./pages/AddDiary.jsx";
import ReadDiary from "./pages/ReadDiary.jsx";
import store from "./store.js";
import { Provider } from "react-redux"; // Updated import
import Addplanner from "./pages/Addplanner.jsx";
import Modal from "react-modal";
import SearchTodo from "./pages/SearchTodo.jsx";

Modal.setAppElement("#root");

// Define your routes
const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/planner",
    element: <Planner />,
  },
  {
    path: "/todolist",
    element: <Todolist />,
  },
  {
    path: "/todoList/search",
    element: <SearchTodo />,
  },
  {
    path: "/diary",
    element: <AddDiary />,
  },
  {
    path: "/readDiary",
    element: <ReadDiary />,
  },
  {
    path: "/planner/addplanner",
    element: <Addplanner />,
  },
];

// Create a router with the defined routes
const router = createBrowserRouter(routes);

// Render the application with the router
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
