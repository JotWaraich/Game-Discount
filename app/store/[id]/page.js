"use client";

import React, { useEffect, useState } from "react";
import Card from "@/app/Components/GameCard";

const Page = ({ params }) => {
  const [deals, setDeals] = useState([]);
  const [store, setStore] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.cheapshark.com/api/1.0/deals?storeID=${params.id}&upperPrice=15`
    )
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
          <div key={index}>
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
};

export default Page;
