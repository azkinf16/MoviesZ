import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPopular = createAsyncThunk("popular/getPopular", async () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
  try {
    const popular = await axios.get(`${API_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });

    return popular.data.results;
  } catch (error) {
    console.log(error);
  }
});

export const postPopularSlice = createSlice({
  name: "popular",
  initialState: {
    popular: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getPopular.pending]: (state) => {
      state.loading = true;
    },
    [getPopular.fulfilled]: (state, action) => {
      state.loading = false;
      state.popular = action.payload;
    },
    [getPopular.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const getMain = createAsyncThunk("main/getMain", async () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
  try {
    const main = await axios.get(`${API_URL}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
      },
    });

    return main.data.results;
  } catch (error) {
    console.log(error);
  }
});

export const postMainSlice = createSlice({
  name: "main",
  initialState: {
    main: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getMain.pending]: (state) => {
      state.loading = true;
    },
    [getMain.fulfilled]: (state, action) => {
      state.loading = false;
      state.main = action.payload;
    },
    [getMain.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const getTop = createAsyncThunk("top/getTop", async () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
  try {
    const top = await axios.get(`${API_URL}/movie/top_rated`, {
      params: {
        api_key: API_KEY,
      },
    });

    return top.data.results;
  } catch (error) {
    console.log(error);
  }
});

export const postTopSlice = createSlice({
  name: "top",
  initialState: {
    top: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getTop.pending]: (state) => {
      state.loading = true;
    },
    [getTop.fulfilled]: (state, action) => {
      state.loading = false;
      state.top = action.payload;
    },
    [getTop.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const getUpcoming = createAsyncThunk("upcoming/getUpcoming", async () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
  try {
    const upcoming = await axios.get(`${API_URL}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
      },
    });

    return upcoming.data.results;
  } catch (error) {
    console.log(error);
  }
});

export const postUpcomingSlice = createSlice({
  name: "upcoming",
  initialState: {
    upcoming: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getUpcoming.pending]: (state) => {
      state.loading = true;
    },
    [getUpcoming.fulfilled]: (state, action) => {
      state.loading = false;
      state.upcoming = action.payload;
    },
    [getUpcoming.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const postUpcoming = postUpcomingSlice.reducer;
export const postTop = postTopSlice.reducer;
export const postMain = postMainSlice.reducer;
export const postPopular = postPopularSlice.reducer;
