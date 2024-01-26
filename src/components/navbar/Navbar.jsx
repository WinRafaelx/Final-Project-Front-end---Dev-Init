import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import useClickOutside from "./useClickOutside";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const linkto = ["/", "/planner", "/todolist", "/diary"];
  const path = window.location.pathname;

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useClickOutside(dropdownRef, closeDropdown);

  return (
    <nav className="relative bg-slate-800 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          /> */}
           <img src='./public/polar-bear.png' alt="" className="h-10" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            LifeLogHub
          </span>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://i.pinimg.com/564x/4c/43/15/4c4315dbd29e5f9e59a11d0685c30268.jpg"
              alt="user photo"
            />
          </button>
          {isDropdownOpen && <UserDropdown onClose={closeDropdown} />}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            {linkto.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    to={link}
                    className={`${
                      path === link
                        ? "block py-2 px-3 text-blue-500 rounded md:bg-transparent md:p-0"
                        : "block py-2 px-3 text-white rounded md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
                    }`}
                  >
                    {link === "/" ? "home" : link.slice(1)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
