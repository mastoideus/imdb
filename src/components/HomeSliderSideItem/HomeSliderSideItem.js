import React from "react";
import { BsPlayCircle } from "react-icons/bs";

const HomeSliderSideItem = (props) => {
  return (
    <div className=" flex gap-5 items-center">
      <img src={props.img} alt="" className="w-[100px] h-[150px] " />
      <div>
        <div className="flex gap-2 items-center mb-1">
          <BsPlayCircle className="text-white text-3xl" />
          <time className=" text-gray-300">2:46</time>
        </div>
        <h2 className="text-gray-100 font-roboto text-lg">{props.title}</h2>
        <p className=" text-gray-600">Watch the Trailer</p>
      </div>
    </div>
  );
};

export default HomeSliderSideItem;
