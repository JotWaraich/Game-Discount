"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
import deals from "../page";

const Navbar = () => {
  const [searchData, setSearchData] = useState("");
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
                href="/store"
                className={`ml-10 uppercase hover:text-blue-700 dark:hover:text-blue-500 ${
                  router === "/store"
                    ? "text-blue-700 dark:text-blue-500"
                    : "dark:text-white"
                }`}
              >
                Store
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
          </ul>
        </div>
        <div className="relative hidden sm:flex">
          <Link
            href={`/${searchData}`}
            className="absolute inset-y-0 start-0 flex items-center ps-3"
          >
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
          </Link>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            onChange={(e) => setSearchData(e.target.value)}
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
        <div className="relative mt-3 md:hidden mx-4">
          <button className="absolute inset-y-0 start-0 flex items-center ps-3">
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
          </button>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            onChange={(e) => setSearchData(e.target.value)}
          />
        </div>
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link
              href="/"
              className={`block py-2 px-3  rounde rounded-md ${
                router === "/"
                  ? "text-white dark:text-white bg-blue-700"
                  : "text-gray-900 dark:text-white  dark:border-gray-700"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/store"
              className={`block py-2 px-3  rounde rounded-md ${
                router === "/store"
                  ? "text-white dark:text-white bg-blue-700"
                  : "text-gray-900 dark:text-white  dark:border-gray-700"
              }`}
            >
              Store
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`block py-2 px-3  rounde rounded-md ${
                router === "/about"
                  ? "text-white dark:text-white bg-blue-700"
                  : "text-gray-900 dark:text-white  dark:border-gray-700"
              }`}
            >
              About
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
