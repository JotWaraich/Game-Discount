import React from "react";
import Link from "next/link";

const StoreCard = ({ title, imgURL, storeID }) => {
  return (
    <div className="w-80 max-h-96 flex flex-col  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg w-80 h-36"
          src={`https://www.cheapshark.com${imgURL}`}
          alt="store Banner"
        />
      </a>
      <div className="px-5 pb-5 mt-3 flex flex-col">
        <a href="#">
          <h5 className="min-h-14 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <Link
          href={`/store/${storeID}`}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          See Game Deals
        </Link>
      </div>
    </div>
  );
};

export default StoreCard;
