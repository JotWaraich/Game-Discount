"use client";

import React, { useEffect, useState } from "react";
import Card from "../../Components/DetailsCard";

const Page = ({ params }) => {
  const [deals, setDeals] = useState([]);
  const [store, setStore] = useState([]);

  useEffect(() => {
    fetch(`https://www.cheapshark.com/api/1.0/games?id=${params.gameID}`)
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
  var storeimg = "";

  return (
    <div className="bg-black">
      <div>
        <img
          src={`${deals.info && deals.info.thumb}`}
          alt=""
          className="w-full h-96"
        />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4 my-7 lg:mx-20">
        {deals.deals &&
          deals.deals.map((deal, index) => (
            <div key={index}>
              {store.map((store) => {
                if (store.storeID === deal.storeID) {
                  storen = store.storeName;
                  storeimg = store.images.banner;
                }
              })}
              <Card
                className=""
                key={index}
                title={storen}
                salePrice={deal.price}
                imgURL={storeimg}
                normalPrice={deal.retailPrice}
                gameID={deal.gameID}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
