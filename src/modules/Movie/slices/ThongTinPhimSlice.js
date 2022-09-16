import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "apis/movieAPI";

const initialState = {
  ThongTinPhims: [],
  isLoading: false,
  error: "",
};

export const getThongTinPhim = createAsyncThunk(
  "ticket/info/getThongTinPhim",
  async (movieId, { rejectWithValue }) => {
    try {
      const data = await movieAPI.getThongTinPhim(movieId);
      return data.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0].maLichChieu
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


const ThongTinPhimSlice = createSlice({
  name: "ticket/info",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getThongTinPhim.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getThongTinPhim.fulfilled, (state, { payload }) => {
      state.ThongTinPhims = payload
      state.isLoading = false;
    });
    builder.addCase(getThongTinPhim.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});

export default ThongTinPhimSlice.reducer;
