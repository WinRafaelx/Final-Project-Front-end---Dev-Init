import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Planner from './pages/Planner.jsx';
import Todolist from './pages/Todolist.jsx';
import Diary from './pages/Diary.jsx';

const router = createBrowserRouter([
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
    path: "/diary",
    element: <Diary />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
