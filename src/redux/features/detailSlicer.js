import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get details header
export const getDetails = createAsyncThunk("details/getDetails", async (id) => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
  try {
    const detail = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });

    return detail.data;
  } catch (error) {
    console.log(error);
  }
});

export const postDetailsSlice = createSlice({
  name: "details",
  initialState: {
    details: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getDetails.pending]: (state) => {
      state.loading = true;
    },
    [getDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.details = action.payload;
    },
    [getDetails.rejected]: (state) => {
      state.loading = false;
    },
  },
});

// get casts
export const getCasts = createAsyncThunk("casts/getCasts", async (id) => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
  try {
    const cast = await axios.get(`${API_URL}/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });

    return cast.data.cast.slice(0, 10);
  } catch (error) {
    console.log(error);
  }
});

export const postCastsSlice = createSlice({
  name: "casts",
  initialState: {
    casts: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getCasts.pending]: (state) => {
      state.loading = true;
    },
    [getCasts.fulfilled]: (state, action) => {
      state.loading = false;
      state.casts = action.payload;
    },
    [getCasts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

// get reviews
export const getReviews = createAsyncThunk("reviews/getReviews", async (id) => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
  try {
    const review = await axios.get(`${API_URL}/movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });

    return review.data.results.slice(0, 3);
  } catch (error) {
    console.log(error);
  }
});

export const postReviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getReviews.pending]: (state) => {
      state.loading = true;
    },
    [getReviews.fulfilled]: (state, action) => {
      state.loading = false;
      state.reviews = action.payload;
    },
    [getReviews.rejected]: (state) => {
      state.loading = false;
    },
  },
});

// get videos
export const getVideos = createAsyncThunk("videos/getVideos", async (id) => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
  try {
    const video = await axios.get(`${API_URL}/movie/${id}/videos`, {
      params: {
        api_key: API_KEY,
      },
    });
    return video.data.results.find(
      (video) =>
        video.name === "Official Trailer" ||
        video.name === "Official Teaser" ||
        video.name === "Trailer" ||
        video.name === "Teaser"
    );
  } catch (error) {
    console.log(error);
  }
});

export const postVideosSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getVideos.pending]: (state) => {
      state.loading = true;
    },
    [getVideos.fulfilled]: (state, action) => {
      state.loading = false;
      state.videos = action.payload;
    },
    [getVideos.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const postDetails = postDetailsSlice.reducer;
export const postCasts = postCastsSlice.reducer;
export const postReviews = postReviewsSlice.reducer;
export const postVideos = postVideosSlice.reducer;
