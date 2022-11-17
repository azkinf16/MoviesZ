import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

export const dataGoogleLogin = createAsyncThunk(
  "googleLogin/dataGoogleLogin",
  async (credentialResponse) => {
    var decoded = jwt_decode(credentialResponse.credential);

    localStorage.setItem(
      "token",
      JSON.stringify(credentialResponse.credential)
    );
    localStorage.setItem("name", JSON.stringify(decoded.name));
    localStorage.setItem("image", JSON.stringify(decoded.picture));

    return decoded;
  }
);

export const postGoogleLoginSlice = createSlice({
  name: "googleLogin",
  initialState: {
    googleLogin: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [dataGoogleLogin.pending]: (state) => {
      state.loading = true;
    },
    [dataGoogleLogin.fulfilled]: (state) => {
      state.loading = false;
      alert("Login Succes !");
      window.location.reload();
    },
    [dataGoogleLogin.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const postGoogleLogin = postGoogleLoginSlice.reducer;
