"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Card from "../Components/StoreCard";

export default function Page() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/stores")
      .then((response) => response.json())
      .then((data) => {
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
          <div key={index}>
            <Card
              key={index}
              title={deal.storeName}
              imgURL={deal.images.banner}
              storeID={deal.storeID}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
