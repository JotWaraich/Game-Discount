"use client";

import React, { useState, useEffect } from "react";
import Card from "../../components/DetailsCard";

const Page = ({ params }) => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    console.log(params.gameID);
    fetch(`https://www.cheapshark.com/api/1.0/games?id=${params.gameID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // handle the fetched data here
        setDeals(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-black">
      <div className=" w-full justify-center flex flex-col items-center">
        <img
          src={`${deals.info.thumb}`}
          alt="game banner"
          className="h-80 w-full px-10"
        />
        <h1 className="text-5xl">{deals.info.title}</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4 my-7 lg:mx-20">
        {deals.deals.map((deal, index) => (
          <Card
            className=""
            key={index}
            title={deal.title}
            salePrice={deal.salePrice}
            imgURL={deal.thumb}
            normalPrice={deal.normalPrice}
            rating={deal.steamRatingText}
            gameID={deal.gameID}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
