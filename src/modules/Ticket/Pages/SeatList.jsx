import React from "react";
import { useDispatch } from "react-redux";
import scss from "./style.module.scss";

const SeatList = ({ DanhSachGhe }) => {
  console.log(DanhSachGhe);
  const dispatch = useDispatch();

  // const handleSelect = () =>{
  //   alert("aaaaa")
  // }
  return (
      <div className={scss.col1}>
        <h2>Màn hình</h2>
        <div className={scss.chair}>
          {DanhSachGhe.map((ticket) => {
            return (
              <button
                //       let ticketing =
                //         ticketa.booked === true ? `${scss.chairing}` : "";
                key={ticket.stt}
                // onClick = {() => handleSelect()}
              >
                {ticket.tenGhe}
              </button>
            );
          })}
        </div>
      </div>
  );
};

export default SeatList;
