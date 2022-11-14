export const makeMovieSlug = (title) => {
  return title.toLowerCase().replace(/ /g, "-");
};

export const getMovieVideos = (movieId) => {
  const dataMovie = fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=615885515a2d517f3d91fb5674ee5a07`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      return data.results;
    });

  return dataMovie;
};
