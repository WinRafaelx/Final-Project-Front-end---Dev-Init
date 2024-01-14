import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import useClickOutside from "./useClickOutside";

const UserDropdown = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useClickOutside(dropdownRef, onClose);

  return (
    <div
      ref={dropdownRef}
      className={`z-50 absolute right-0 top-12 mt-2 w-48 ${
        isOpen ? "block" : "hidden"
      } bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg dark:bg-gray-700 dark:border-gray-600 dark:divide-gray-600`}
    >
      <div className="px-4 py-3">
        <span className="block text-sm text-gray-900 dark:text-white">
          Akuma Raiju
        </span>
        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
          AkumaRaiju@gmail.com
        </span>
      </div>
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <Link
            to="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/planner"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            planner
          </Link>
        </li>
        <li>
          <Link
            to="/todolist"
            className="block px-4 py-2 text-sm text-gray-700 hover.bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Todolist
          </Link>
        </li>
        <li>
          <Link
            to="/diary"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover.bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Diary
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
