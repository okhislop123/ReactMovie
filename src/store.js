import { configureStore } from "@reduxjs/toolkit";
import authSlice from "modules/Authentication/slices/authSlice";
import ThongTinPhimSlice from "modules/Movie/slices/ThongTinPhimSlice";
import LayDanhSachGhe from "modules/Ticket/slices/LayDanhSachGhe";

const store = configureStore({
  reducer: {
    auth: authSlice,
    thongtinphim : ThongTinPhimSlice,
    danhsachghe : LayDanhSachGhe,
  },
});

export default store;
