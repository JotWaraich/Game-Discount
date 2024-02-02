"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex justify-between items-center w-full h-16 px-4 2xl:px-16">
        <div>
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Game Discount
            </span>
          </Link>
        </div>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <li>
              <Link
                href="/"
                className={`ml-10 uppercase hover:text-blue-700 dark:hover:text-blue-500 ${
                  router === "/"
                    ? "text-blue-700 dark:text-blue-500"
                    : "dark:text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`ml-10 uppercase hover:text-blue-700 dark:hover:text-blue-500 ${
                  router === "/about"
                    ? "text-blue-700 dark:text-blue-500"
                    : "dark:text-white"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`ml-10 uppercase hover:text-blue-700 dark:hover:text-blue-500 ${
                  router === "/services"
                    ? "text-blue-700 dark:text-blue-500"
                    : "dark:text-white"
                }`}
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative hidden sm:flex">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
        <div onClick={toggleMenu} className="md:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={`border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ${
          isOpen ? "block" : "hidden"
        } items-center justify-between w-full md:hidden`}
        id="navbar-search"
      >
        <div className="relative mt-3 md:hidden">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link
              href="/"
              className={`block py-2 px-3  rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700 ${
                router === "/"
                  ? "text-white dark:text-white bg-blue-700"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`block py-2 px-3  rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700 ${
                router === "/about"
                  ? "text-white dark:text-white bg-blue-700"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`block py-2 px-3  rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700 ${
                router === "/services"
                  ? "text-white dark:text-white bg-blue-700"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              Services
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// {
//   router.pathname === "/" && "text-blue-700 dark:text-blue-500"
// }
