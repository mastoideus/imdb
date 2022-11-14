import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    favMovies: [],
  },
  reducers: {
    catchTopMovies(state, action) {
      state.movies = action.payload;
    },
    catchFavMovies(state, action) {
      state.favMovies = action.payload;
    },
  },
});

export const moviesActions = moviesSlice.actions;

export default moviesSlice;
