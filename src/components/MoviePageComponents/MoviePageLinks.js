import React from "react";

const MoviePageLinks = () => {
  return (
    <div className="w-[100%] p-1 text-gray-200 flex justify-end gap-2 divide-x-2 divide-gray-700">
      <p className="moviePageLink">Cast and crew</p>
      <p className="moviePageLink">User reviews</p>
      <p className="moviePageLink">Trivia</p>
      <p className="moviePageLink">IMDbPro</p>
      <p className="moviePageLink">All topics</p>
    </div>
  );
};

export default MoviePageLinks;
