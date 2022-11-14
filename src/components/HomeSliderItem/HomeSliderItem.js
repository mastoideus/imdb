import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export const HomeSliderItem = (props) => {
  return (
    <Link to={`/trailer/${props.id}`}>
      <div className="group w-[100%] relative z-50">
        <img
          src={props.img}
          alt=""
          className="hover:opacity-50"
          style={{ width: "100%", objectFit: "contain", height: "500px" }}
        />

        <div
          className="w-[100%] h-[30px] absolute left-0 bottom-0 bg-black"
          style={{
            boxShadow: "0px 0px 160px 160px black",
          }}
        ></div>
        <div className="w-[100%] h-[200px]  absolute left-5 mt-[-250px] flex gap-4">
          <img src={props.thumb} alt="" className="w-[170px] h-[270px] " />
          <div className="flex items-center gap-4 text-white font-roboto font-light mt-[150px]">
            <BsPlayCircle
              style={{ fontSize: "74px" }}
              className=" group-hover:text-yellow-500"
            />
            <div>
              <p className="text-4xl font-thin">{props.title}</p>
              <p className=" text-lg text-gray-400">Watch the New Teaser</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
