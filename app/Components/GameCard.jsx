import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ title, salePrice, imgURL, normalPrice, gameID, storeId }) => {
  return (
    <div className="w-80 max-h-[430px] flex flex-col  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          className=" rounded-t-lg w-80 h-52"
          src={imgURL}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5 mt-3 flex flex-col">
        <a href="#">
          <h5 className="min-h-[6rem] text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className={`flex items-center min-h-0`}>{storeId}</div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white flex mb-9">
            {salePrice} {}
            <div className="line-through text-gray-500 text-base ml-2 mt-3">
              {normalPrice}
            </div>
          </span>
          <Link
            href={`/game/${gameID}`}
            className="mb-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            More Deals
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
