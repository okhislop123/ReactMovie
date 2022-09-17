import { configureStore } from "@reduxjs/toolkit";
import authSlice from "modules/Authentication/slices/authSlice";
import ThongTinPhimSlice from "modules/Movie/slices/ThongTinPhimSlice";
import LayDanhSachGhe from "modules/Ticket/slices/LayDanhSachGhe";
import GioHang from "modules/Ticket/slices/GioHang";


const store = configureStore({
  reducer: {
    auth: authSlice,
    thongtinphim : ThongTinPhimSlice,
    danhsachghe : LayDanhSachGhe,
    giohang : GioHang,
  },
});

export default store;
