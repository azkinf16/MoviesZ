import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMainCategory = createAsyncThunk(
  "mainCategory/getMainCategory",
  async (genreId) => {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
    try {
      const mainCategory = await axios.get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
          include_adult: false,
          with_genres: `${genreId}`,
        },
      });
      return mainCategory.data.results;
    } catch (error) {
      console.log(error);
    }
  }
);

export const postMainCategorySlice = createSlice({
  name: "mainCategory",
  initialState: {
    mainCategory: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getMainCategory.pending]: (state) => {
      state.loading = true;
    },
    [getMainCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.mainCategory = action.payload;
    },
    [getMainCategory.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const postMainCategory = postMainCategorySlice.reducer;
