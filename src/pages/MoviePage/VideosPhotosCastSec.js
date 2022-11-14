import React from "react";
import SectionHeader from "./SectionHeader";
import TopCastItem from "./TopCastItem";
import Slider from "react-slick";
import { SampleNextArrow } from "../HomePage/HomePage";
import { SamplePrevArrow } from "../HomePage/HomePage";

const VideosPhotosCastSec = ({ data, slidesNum, title }) => {
  let sliderItemData;
  if (title === "Videos") {
    sliderItemData = data.map((video) => {
      return (
        <div className="w-[280px] h-[340px]" key={video.key}>
          <iframe
            title="video"
            loading="lazy"
            width={data.length === 1 ? "65%" : "95%"}
            height="80%"
            src={`https://www.youtube.com/embed/${video.key}`}
          ></iframe>
          <p className="h-[20%] font-oswald">{video.type}</p>
        </div>
      );
    });
  } else if (title === "Photos") {
    sliderItemData =
      data &&
      data.map((photo) => {
        return (
          <div key={photo.file_path} className=" h-[300px]">
            <img
              src={`https://image.tmdb.org/t/p/w500/${photo.file_path}`}
              alt=""
              className=" h-auto object-fill w-[290px]"
            />
          </div>
        );
      });
  }

  const settings = {
    autoplay: false,
    slidesToShow: data && data.length === 1 ? 1 : slidesNum,
    nextArrow: <SampleNextArrow title={title} />,
    prevArrow: <SamplePrevArrow topPicksOnly={true} title={title} />,
  };
  return (
    <div>
      <SectionHeader title={title} numVideos={data && data.length} />
      {title === "Top cast" ? (
        <div
          className=" w-[100%] "
          style={{ display: "grid", gridTemplateColumns: "auto auto" }}
        >
          {data &&
            data.splice(0, 15).map((person) => {
              return (
                <TopCastItem
                  name={person.name}
                  key={person.id}
                  roleName={person.character}
                  imgUrl={person.profile_path}
                />
              );
            })}
        </div>
      ) : (
        <Slider
          {...settings}
          style={{
            width: "100%",
            height: "200px",
          }}
        >
          {sliderItemData}
        </Slider>
      )}
    </div>
  );
};

export default VideosPhotosCastSec;
