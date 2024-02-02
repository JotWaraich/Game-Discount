"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Card from "./Components/Card";

export default function Home() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
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
          />
        ))}
      </div>
    </div>
  );
}
