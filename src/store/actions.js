export const fetchTopMovies = (action, moviesSlug) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${moviesSlug}?api_key=615885515a2d517f3d91fb5674ee5a07`
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const movieData = await response.json();
      const transformedMovieData = [];
      movieData.results.forEach((movie) => {
        transformedMovieData.push({
          id: movie.id,
          title: movie.title,
          popularity: movie.popularity,
          rating: movie.vote_average,
          overview: movie.overview,
          release: movie.release_date,
          pathImg: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
          posterImg: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        });
      });
      dispatch(action(transformedMovieData));
    } catch (error) {
      console.log(error.message);
    }
  };
};
