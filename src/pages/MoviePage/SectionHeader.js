import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const SectionHeader = ({ title, numVideos }) => {
  return (
    <div
      className={`flex gap-3 items-center  mb-5 ${
        title === "Photos" && "mt-[100px]"
      }`}
    >
      <h1 className=" text-black border-l-4 rounded-sm border-l-yellow-500 pl-2 font-roboto font-bold text-4xl">
        {title}
      </h1>
      <small className=" text-gray-600">{numVideos}</small>
      <IoIosArrowForward className=" text-2xl text-black font-extrabold" />
    </div>
  );
};

export default SectionHeader;
