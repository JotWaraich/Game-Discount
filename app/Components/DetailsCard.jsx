import React from "react";
import Link from "next/link";

const DetailsCard = ({ title, salePrice, normalPrice, storeId, imgURL }) => {
  return (
    <div className="w-80 max-h-72 flex flex-col  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg w-80 h-36"
          src={`https://www.cheapshark.com${imgURL}`}
          alt="store Banner"
        />
      </a>
      <div className="px-5 pb-5 mt-3 flex flex-col">
        <a href="#">
          <h5 className="min-h-14 text-xl font-semibold tracking-tight text-gray-900 dark:text-white flex justify-center">
            {title}
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white flex mb-9">
            {salePrice} {}
            <div className="line-through text-gray-500 text-base ml-2 mt-3">
              {normalPrice}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
