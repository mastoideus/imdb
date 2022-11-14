import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import MovieItem from "./MovieItem";
import { RiBookmark3Fill } from "react-icons/ri";
import Slider from "react-slick";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../pages/HomePage/HomePage";

const WhatToWatchComp = ({ title, subtitle, topPicksData, watchlist }) => {
  const watchlistContent = (
    <div className=" text-white flex flex-col justify-center items-center mt-16 font-roboto">
      <RiBookmark3Fill className=" text-gray-800 text-5xl mb-3" />
      <p className=" font-bold text-gray-100">
        Sign in to access your Watchlist
      </p>
      <p className=" text-gray-200 mb-8">
        Save shows and movies to keep track of what you want to watch.
      </p>
      <button className=" px-8 py-2 bg-yellow-400  text-sm mb-16  text-black font-semibold rounded-sm">
        Sign in to IMDb
      </button>
    </div>
  );
  const settings = {
    autoplay: false,
    slidesToShow: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow topPicksOnly={true} />,
  };
  return (
    <div className={`mt-${watchlist ? "28" : "10"}`}>
      <div className="pl-6">
        <div className="flex gap-3 items-center  mb-2">
          <h2 className=" text-white border-l-4 rounded-sm border-l-yellow-500 pl-2 font-roboto font-bold text-2xl">
            {title}
          </h2>
          <IoIosArrowForward className=" text-2xl text-white font-extrabold" />
        </div>
        <p className=" text-gray-400 text-[17px] font-semibold">
          {subtitle && subtitle}
        </p>
      </div>
      {watchlist ? (
        watchlistContent
      ) : (
        <Slider
          {...settings}
          style={{ width: "100%", height: "450px", marginTop: "50px" }}
        >
          {topPicksData.map((movie) => {
            return (
              <MovieItem
                title={movie.title}
                img={movie.pathImg}
                id={movie.id}
                posterImg={movie.posterImg}
                rating={movie.rating}
                key={movie.title}
                slug={movie.slug}
              />
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default WhatToWatchComp;
