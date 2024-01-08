// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Planner from './pages/Planner.jsx';
import Todolist from './pages/Todolist.jsx';
import Diary from './pages/Diary.jsx';
import AddPlanner from './pages/Addplanner.jsx';

// Define your routes
const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/planner',
    element: <Planner />,
  },
  {
    path: '/todolist',
    element: <Todolist />,
  },
  {
    path: '/diary',
    element: <Diary />,
  },
  {
    path: '/planner/addplanner',
    element: <AddPlanner />,
  },
];

// Create a router with the defined routes
const router = createBrowserRouter(routes);

// Render the application with the router
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
