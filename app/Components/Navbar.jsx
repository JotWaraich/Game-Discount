"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              Flowbite
            </span>
          </Link>
        </div>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <li>
              <Link
                href="/"
                className="ml-10 uppercase hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Hone
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="ml-10 uppercase hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="ml-10 uppercase hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative hidden sm:flex">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search icon</span>
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
        <div class="relative mt-3 md:hidden">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Services
            </a>
          </li>
        </ul>
      </div>
    </nav>

    // return (
    //   <nav className="bg-white border-gray-200 dark:bg-gray-900">
    //     <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
    //       <a
    //         href="https://flowbite.com/"
    //         className="flex items-center space-x-3 rtl:space-x-reverse"
    //       >
    //         <img
    //           src="https://flowbite.com/docs/images/logo.svg"
    //           className="h-8"
    //           alt="Flowbite Logo"
    //         />
    //         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
    //           Flowbite
    //         </span>
    //       </a>
    //       <div className="hidden md:flex items-center w-full md:w-auto">
    //         <ul className="flex flex-row space-x-8 rtl:space-x-reverse">
    //           <li>
    //             <Link
    //               href="/"
    //               className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
    //             >
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="/services"
    //               className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
    //             >
    //               Services
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="/about"
    //               className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
    //             >
    //               About
    //             </Link>
    //           </li>
    //         </ul>
    //         <div className="relative mt-3">
    //           <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
    //             <svg
    //               className="w-4 h-4 text-gray-500 dark:text-gray-400"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 20 20"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
    //               />
    //             </svg>
    //           </div>
    //           <input
    //             type="text"
    //             id="search-navbar"
    //             className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //             placeholder="Search..."
    //           />
    //         </div>
    //       </div>
    //       <div className="flex md:hidden">
    //         <button
    //           type="button"
    //           onClick={toggleMenu}
    //           className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
    //         >
    //           <svg
    //             className="w-5 h-5"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 20 20"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
    //             />
    //           </svg>
    //           <span className="sr-only">Open main menu</span>
    //         </button>
    //       </div>
    //     </div>
    //     <div
    //       className={`${
    //         isOpen ? "block" : "hidden"
    //       } items-center justify-between w-full md:hidden`}
    //       id="navbar-search"
    //     >
    //       <div>hello</div>
    //     </div>
    //   </nav>
  );
};

export default Navbar;
