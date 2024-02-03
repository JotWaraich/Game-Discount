"use client";

import React, { useEffect, useState } from "react";
import Card from "@/app/Components/SearchGame";

const page = ({ params }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.cheapshark.com/api/1.0/games?title=${params.search.replace(
        "%20",
        ""
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="bg-black">
      <div className="flex justify-center items-center flex-wrap gap-4 my-7 lg:mx-20">
        {data.map((deal, index) => (
          <Card
            className=""
            key={index}
            title={deal.external}
            salePrice={deal.cheapest}
            imgURL={deal.thumb}
            gameID={deal.gameID}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
