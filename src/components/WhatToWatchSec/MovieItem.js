import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar, AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill, BsInfoCircle } from "react-icons/bs";
import { RiBookmark3Fill } from "react-icons/ri";

const MovieItem = ({ img, title, rating, id, posterImg }) => {
  return (
    <div className=" w-[190px] h-[500px] bg-gray-900 rounded-sm relative">
      <RiBookmark3Fill className=" absolute text-3xl text-black opacity-70 left-0 top-0 z-50" />
      <Link to={`/movies/${id}`}>
        <img
          src={posterImg}
          alt=""
          className=" w-[100%] h-[58%] hover:opacity-80 transition-all duration-300"
        />
      </Link>
      <div className=" p-3">
        <div className="flex gap-10 items-center">
          <div className="flex gap-1 items-center">
            <AiFillStar className=" text-yellow-500" />
            <p className=" text-gray-300">{rating}</p>
          </div>
          <AiOutlineStar className=" text-blue-400 text-lg" />
        </div>
        <Link to={`/movies/${id}`}>
          <h2 className=" text-gray-200 text-[17px] mt-3 mb-10 truncate hover:underline">
            {title}
          </h2>
        </Link>
        <button className="flex gap-1 rounded-sm items-center px-3 py-2 justify-center w-[100%] bg-gray-800">
          <AiOutlinePlus className=" text-blue-500" />
          <p className=" font-medium text-blue-500 text-[15px]">Watchlist</p>
        </button>
        <div className="flex justify-between items-center p-3">
          <div className="flex gap-1 text-gray-50 items-center  text-sm">
            <BsFillPlayFill />
            <p>Trailer</p>
          </div>
          <BsInfoCircle className=" text-gray-50" />
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
