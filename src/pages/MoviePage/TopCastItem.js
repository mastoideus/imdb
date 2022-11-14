import React from "react";
import { GoPerson } from "react-icons/go";

const TopCastItem = ({ imgUrl, name, roleName }) => {
  return (
    <div className=" w-[75%] flex  gap-6 items-center mb-6 mt-2">
      <div className=" rounded-[50%] w-[100px] h-[100px] overflow-hidden border border-gray-200">
        {imgUrl ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${imgUrl}`}
            alt=""
            className=" w-[100%] h-[100%] object-cover"
          />
        ) : (
          <GoPerson className=" text-gray-300 w-[100%] h-[100%]" />
        )}
      </div>
      <div>
        <h3 className=" font-roboto font-semibold">{name}</h3>
        <p className=" text-gray-500">{roleName}</p>
      </div>
    </div>
  );
};

export default TopCastItem;
