import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllMovies = createAsyncThunk(
  "allMovies/getAllMovies",
  async (page) => {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
    try {
      const allMovies = await axios.get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
          include_adult: false,
          page: `${page}`,
        },
      });

      return allMovies.data.results;
    } catch (error) {
      console.log(error);
    }
  }
);

export const postAllMoviesSlice = createSlice({
  name: "allMovies",
  initialState: {
    allMovies: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getAllMovies.pending]: (state) => {
      state.loading = true;
    },
    [getAllMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.allMovies = action.payload;
    },
    [getAllMovies.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const postAllMovies = postAllMoviesSlice.reducer;
