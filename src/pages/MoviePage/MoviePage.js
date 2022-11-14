import React, { useEffect, useCallback } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import MoviePageLinks from "../../components/MoviePageComponents/MoviePageLinks";
import MoviePageTitle from "../../components/MoviePageComponents/MoviePageTitle";
import MoviePageRatings from "../../components/MoviePageComponents/MoviePageRatings";
import BodySection from "./BodySection";
import VideosPhotosCastSec from "./VideosPhotosCastSec";
import { getMovieVideos } from "../../utilities/helperFunc";
import LoadingSpinner from "../../components/LoadingSpinner";

const fetchJSON = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const movieData = await res.json();

  return movieData;
};

const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const [movieVideos, setMovieVideos] = useState([]);
  const [moviePhotos, setMoviePhotos] = useState([]);
  const [cast, setCast] = useState([]);

  const params = useParams();
  const movieId = params.slug;

  const fetchMovie = useCallback(async () => {
    try {
      const movieData = await fetchJSON(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=615885515a2d517f3d91fb5674ee5a07`
      );
      const transformedMovieData = {
        ...movieData,
        pathImg: `https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`,
        posterImg: `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`,
        release: movieData.release_date.replaceAll("-", "/"),
        rating: movieData.vote_average.toFixed(1),
      };
      setMovie(transformedMovieData);

      const resPhotos = await fetchJSON(
        `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=615885515a2d517f3d91fb5674ee5a07`
      );

      setMoviePhotos(resPhotos);

      const resCast = await fetchJSON(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=615885515a2d517f3d91fb5674ee5a07`
      );
      const cast = resCast.cast;
      setCast(cast);
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  useEffect(() => {
    const getVideos = async () => {
      const movieVideos = await getMovieVideos(movieId);
      console.log(movieVideos);
      setMovieVideos(movieVideos);
    };
    getVideos();
  }, [movieId]);

  return (
    <div className=" bg-white ">
      <section className=" text-white bg-zinc-800 w-[100%] pb-10  pt-[70px] px-[112px]">
        <MoviePageLinks />
        <div className="mt-6 flex justify-between items-center">
          <MoviePageTitle title={movie.title} release={movie.release} />
          <MoviePageRatings
            popularity={movie.popularity}
            rating={movie.rating}
          />
        </div>
        <BodySection
          poster={movie.posterImg}
          id={movie.id}
          genres={movie.genres}
          description={movie.overview}
          movieVideos={movieVideos}
        />
      </section>
      <section className=" flex gap-8 items-center w-[100%] pt-7 px-[112px]">
        <div className="w-[70%] flex flex-col gap-[50px]">
          <VideosPhotosCastSec
            slidesNum={2}
            data={movieVideos}
            title="Videos"
          />

          <VideosPhotosCastSec
            slidesNum={3}
            title="Photos"
            data={moviePhotos.backdrops}
          />
          <VideosPhotosCastSec title="Top cast" data={cast} />
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default MoviePage;
