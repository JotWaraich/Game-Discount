"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Card from "./Components/GameCard";

export default function Home() {
  const [deals, setDeals] = useState([]);
  const [store, setStore] = useState([]);

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals")
      .then((response) => response.json())
      .then((data) => {
        setDeals(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch("https://www.cheapshark.com/api/1.0/stores")
      .then((response) => response.json())
      .then((data) => {
        setStore(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  var storen = "";

  return (
    <div className="bg-black">
      <div className="flex justify-center items-center flex-wrap gap-4 my-7 lg:mx-20">
        {deals.map((deal, index) => (
          <div>
            {store.map((store) => {
              if (store.storeID === deal.storeID) {
                storen = store.storeName;
              }
            })}
            <Card
              className=""
              key={index}
              title={deal.title}
              salePrice={deal.salePrice}
              imgURL={deal.thumb}
              normalPrice={deal.normalPrice}
              gameID={deal.gameID}
              storeId={storen}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
