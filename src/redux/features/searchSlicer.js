import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSearch = createAsyncThunk(
  "search/getSearch",
  async (search) => {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
    try {
        const searchData = await axios.get(`${API_URL}/search/movie`, {
          params: {
            api_key: API_KEY,
            query: `${search}`,
          },
        });
        return searchData.data.results;
      } catch (error) {
        console.log(error);
      }
  }
);

export const postSearchSlice = createSlice({
    name: "search",
    initialState: {
      search: [],
      loading: false,
    },
    reducers: {},
    extraReducers: {
      [getSearch.pending]: (state) => {
        state.loading = true;
      },
      [getSearch.fulfilled]: (state, action) => {
        state.loading = false;
        state.search = action.payload;
      },
      [getSearch.rejected]: (state) => {
        state.loading = false;
      },
    },
  });
  
  export const postSearch = postSearchSlice.reducer;