"use client";

import React, { useEffect, useState } from "react";
import Card from "@/app/Components/GameCard";

const Page = ({ params }) => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.cheapshark.com/api/1.0/deals?storeID=${params.id}&upperPrice=15`
    )
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
      <div className="flex justify-center items-center flex-wrap gap-4 my-7 lg:mx-20">
        {deals.map((deal, index) => (
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
