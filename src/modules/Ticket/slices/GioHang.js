import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DanhSachGheDangDat: [],
};


const selectChairs = (state, action) => {
  switch (action.type) {
    case "chair/selectChair":
      console.log("test");
      const danhSachGheCapNhat = [...state.DanhSachGheDangDat];
      const index = danhSachGheCapNhat.findIndex((item) => {
        return item.maGhe === action.payload.maGhe;
      });
      if (index !== -1) {
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.payload);
      }
      return { ...state, DanhSachGheDangDat: danhSachGheCapNhat };
    case "chair/handleBook":
      console.log("first");
      return { ...state };
    default:
      return state;
  }
};

const handleBookedTicket = (state, action) => {
  switch (action.type) {
    case "chair/handleBook":
        console.log("first")
      return { ...state };
    default:
      console.log("bok");
      return state;
  }
};

const GioHang = createSlice({
  name: "chair",
  initialState,
  reducers: {
    selectChair: selectChairs,
    handleBook: (state,action) => {
        console.log("first")
    } ,
  },
});

export const { selectChair, handleBook } = GioHang.actions;

export default GioHang.reducer;
