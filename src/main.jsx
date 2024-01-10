// Import necessary dependencies
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Updated imports
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Planner from './pages/Planner.jsx';
import Todolist from './pages/Todolist.jsx';
import Diary from './pages/Diary.jsx';
import store from './store.js';
import { Provider } from 'react-redux'; // Updated import
import Addplanner from './pages/Addplanner.jsx';
import Modal from 'react-modal';

Modal.setAppElement('#root');

// Define your routes
const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/planner',
    element: (
      <Provider store={store}>
        <Planner />
      </Provider>
    ),
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
    element:(
      <Provider store={store}>
        <Addplanner />
      </Provider>
    ),
  },
];

// Create a router with the defined routes
const router = createBrowserRouter(routes);

// Render the application with the router
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);