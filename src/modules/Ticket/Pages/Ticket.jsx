import React, { useEffect } from "react";
import SeatDetail from "./SeatDetail";
import SeatList from "./SeatList";
import scss from "./style.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLayGhe } from "../slices/LayDanhSachGhe";

const Ticket = () => {
  const { ticketId } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { ThongTinPhim, isLoading, error } = useSelector(
    (state) => state.danhsachghe
  );
  console.log(ThongTinPhim);

  useEffect(() => {
    dispatch(getLayGhe(ticketId));
  }, []);

  return (
    <div className={scss.container}>
      <h1 className={scss.h1}>ĐẶT VÉ XEM PHIM</h1>
      <div className={scss.row}>
        <SeatList DanhSachGhe={ThongTinPhim.danhSachGhe} />
        <SeatDetail ThongTinPhim={ThongTinPhim.thongTinPhim} />
      </div>
    </div>
  );
};

export default Ticket;
