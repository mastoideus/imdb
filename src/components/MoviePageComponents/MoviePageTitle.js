import React from "react";

const MoviePageTitle = ({ title, release }) => {
  return (
    <div>
      <h1 className="  text-5xl font-roboto text-gray-100 mb-3">{title}</h1>
      <span className="flex items-center gap-2 text-gray-400 font-semibold">
        <p>{release}</p>
      </span>
    </div>
  );
};

export default MoviePageTitle;
