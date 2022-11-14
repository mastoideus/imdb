import React, { useCallback } from "react";
import Slider from "react-slick";
import { homeSliderItems } from "../../utilities/sliderItemData";
import { HomeSliderItem } from "../../components/HomeSliderItem/HomeSliderItem";
import HomeSliderSideItem from "../../components/HomeSliderSideItem/HomeSliderSideItem";
import WhatToWatchSec from "../../components/WhatToWatchSec/WhatToWatchSec";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export function SampleNextArrow(props) {
  const { onClick, title } = props;

  return (
    <div
      style={{
        backgroundColor: "black",
        opacity: 0.5,
        position: "absolute",
        top: title === "Photos" ? 60 : 150,
        right: 0,
        height: "75px",
        width: "55px",
        fontSize: "35px",
        border: "1px solid white",
        borderRadius: "3px",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward
        style={{ fontSize: "40px", fontWeight: "bold", color: "yellow" }}
      />
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { onClick, title } = props;
  return (
    <div
      style={{
        backgroundColor: "black",
        opacity: 0.5,
        position: "absolute",
        top: title === "Photos" ? 60 : 150,
        left: props.topPicksOnly ? "-15px" : 0,
        color: "white",
        height: "75px",
        width: "55px",
        fontSize: "35px",
        border: "1px solid white",
        borderRadius: "3px",
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          color: "yellow",
        }}
      />
    </div>
  );
}

const HomePage = () => {
  const swapItems = useCallback((array1) => {
    const firstItem = array1[0];
    const copiedArray = [...array1];
    copiedArray.push(firstItem);
    copiedArray.shift();

    return copiedArray;
  }, []);

  const swapedItems = swapItems(homeSliderItems);

  const settings = {
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settingsSideSlider = {
    infinite: true,
    speed: 500,
    nextArrow: false,
    prevArrow: false,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 3,
    pauseOnHover: false,
    vertical: true,
  };

  return (
    <div className=" px-[112px]">
      <div
        style={{
          marginTop: "65px",
          display: "flex",
          gap: "60px",
          alignItems: "center",
        }}
        className="font-roboto"
      >
        <Slider {...settings} style={{ height: "550px", width: "55vw" }}>
          {homeSliderItems.map((item) => {
            return (
              <HomeSliderItem
                img={item.img}
                key={item.title}
                thumb={item.thumb}
                title={item.title}
                id={item.id}
              />
            );
          })}
        </Slider>
        <div className="mt-2">
          <h2 className=" text-yellow-500 text-xl mb-4 font-bold">Up next</h2>
          <div className="bg-gradient-to-t from-black to-gray-900 p-3 w-[85%]">
            <Slider
              {...settingsSideSlider}
              arrows={false}
              style={{ width: "30vw", height: "500px" }}
            >
              {swapedItems.map((item) => {
                return (
                  <HomeSliderSideItem
                    key={item.title}
                    img={item.thumb}
                    title={item.title}
                  />
                );
              })}
            </Slider>
          </div>
          <div className="flex items-center gap-3">
            <h2 className=" text-gray-100 text-xl font-roboto">
              Browse Trailers
            </h2>
            <IoIosArrowForward className="text-gray-100" />
          </div>
        </div>
      </div>
      <WhatToWatchSec />
    </div>
  );
};

export default HomePage;
