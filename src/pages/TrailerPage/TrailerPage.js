import React from "react";
import { useParams } from "react-router-dom";
import { homeSliderItems } from "../../utilities/sliderItemData";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const TrailerPage = () => {
  const param = useParams();
  const paramId = param.id;
  console.log(paramId);
  const movie = homeSliderItems.find((movie) => movie.id === paramId);
  console.log(movie);

  return (
    <div className="mt-[65px] w-[100%] h-[500px] flex px-[113px]">
      <div className="h-[100%] w-[68%]">
        <Link
          to="/"
          className=" flex items-center hover:bg-gray-900 w-[80px] mt-1 mb-1 px-1"
        >
          <AiOutlineClose style={{ color: "gray", fontSize: "20px" }} />
          <h1 className="  text-gray-200 p-2 font-roboto font-semibold">
            Close
          </h1>
        </Link>
        <iframe
          src={movie.trailer}
          title="trailer"
          autoPlay="1"
          className=" w-[100%] h-[450px]"
        ></iframe>
      </div>
      <div className="h-[100%] w-[32%] bg-gray-900 p-5 flex gap-5 flex-col divide-y-[3px] divide-gray-800">
        <div className="flex gap-5">
          <div className="w-[100px]  border-[1px] border-slate-700">
            <img src={movie.thumb} alt="" style={{ width: "100%" }} />
          </div>
          <div className="flex flex-col font-roboto ">
            <h3 className=" text-lg text-gray-100">{movie.title}</h3>
            <p className="text-gray-600 font-semibold font-oswald">Movie</p>
          </div>
        </div>
        <div className="py-2 text-gray-200 font-roboto">
          <h2 className=" text-2xl mb-3">Official Trailer</h2>
          <p className=" text-gray-400">{movie.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default TrailerPage;
