import React from "react";
import MoviePageRating from "./MoviePageRating";

const MoviePageRatings = ({ popularity, rating }) => {
  return (
    <div className=" flex items-center gap-8 font-roboto">
      <MoviePageRating title="IMBd RATING" rating={rating} imdbRating={true} />
      <MoviePageRating title="YOUR RATING" rating="7.7" />
      <MoviePageRating title="POPULARITY" popularity={popularity} />
    </div>
  );
};

export default MoviePageRatings;
