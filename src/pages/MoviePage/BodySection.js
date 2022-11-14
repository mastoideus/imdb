import React, { useEffect, useState } from "react";
import { RiBookmark3Fill } from "react-icons/ri";
import { getMovieVideos } from "../../utilities/helperFunc";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { AiOutlinePlus, AiOutlineArrowDown } from "react-icons/ai";
import LoadingSpinner from "../../components/LoadingSpinner";

const BodySection = ({ poster, id, genres, description, movieVideos }) => {
  return (
    <div>
      <section className=" flex items-center gap-1 mt-4 w-[100%] h-[420px] ">
        <div className=" border-gray-700 border relative h-[100%] w-[22%]">
          <img src={poster} alt="" className=" w-[100%] h-[100%]" />
          <RiBookmark3Fill className=" absolute left-0 top-0 text-5xl opacity-70 text-gray-900" />
        </div>
        {movieVideos[0] && (
          <iframe
            title="video"
            width="62%"
            height="100%"
            src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
          ></iframe>
        )}
        <div className="flex flex-col gap-1 h-[100%] w-[16%]">
          <div className=" bg-zinc-700 w-[100%] h-[50%] rounded-tr-sm rounded-br-sm flex justify-center items-center">
            <span className="flex flex-col items-center gap-2">
              <BsFillCollectionPlayFill className=" text-3xl" />
              <p className=" font-roboto text-xs tracking-widest">
                {movieVideos.length} VIDEOS
              </p>
            </span>
          </div>
          <div className=" bg-zinc-700 w-[100%] h-[50%] rounded-tr-sm flex justify-center items-center rounded-br-sm">
            <span className="flex flex-col items-center gap-2">
              <IoMdPhotos className=" text-3xl" />
              <p className=" font-roboto text-xs tracking-widest">20 PHOTOS</p>
            </span>
          </div>
        </div>
      </section>
      <section className="flex  gap-16 mt-4">
        <div className="flex flex-col gap-5 w-[60%]">
          <div className="flex gap-2 items-center">
            {genres &&
              genres.map((genre) => (
                <span className=" border text-gray-100  border-gray-200 font-light text-sm rounded-3xl px-3 py-1 ">
                  {genre.name}
                </span>
              ))}
          </div>
          <p className="  tracking-wide font-light text-[14.5px]">
            {description}
          </p>
        </div>
        <div className=" w-[40%]">
          <div className="flex h-[45px] justify-between w-[100%] gap-[1.3px]">
            <button className=" flex items-center p-1 px-2 flex-auto rounded-sm bg-zinc-700 ">
              <AiOutlinePlus className=" font-semibold mr-1" />
              <p className=" text-sm font-semibold">Add to Watchlist</p>
            </button>

            <div className="bg-zinc-700 rounded-tr-sm rounded-br-sm w-[50px] h-[100%] flex justify-center items-center">
              <AiOutlineArrowDown />
            </div>
          </div>
          <div className="flex items-center gap-6 mt-2">
            <p className=" text-blue-600 text-[15px]">
              <span className=" font-semibold">801 </span>User reviews
            </p>
            <p className=" text-blue-600 text-[15px]">
              <span className=" font-semibold">801 </span>Critic reviews
            </p>
            <p className=" text-blue-600 text-[15px]">
              <span className=" font-semibold bg-lime-600 p-0.5 text-white">
                77
              </span>
              <span className=" ml-1">Metascore</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BodySection;
