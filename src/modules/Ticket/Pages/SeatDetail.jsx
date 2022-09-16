import React from "react";
import scss from "./style.module.scss";


const SeatDetail = ({ ThongTinPhim }) => {
  // const handleRemove = () =>{

  // }

  const handleClear = () => {};

  return (
      <div className={scss.col2}>
        <h2>Danh sách ghế đã chọn</h2>
        <br />
        <br />
        <div className={scss.row}>
          <div className={scss.square}></div>
          <h3>ghế đã đặt</h3>
        </div>
        <div className={scss.row}>
          <div className={scss.colorone}></div>
          <h3>ghế đang chọn</h3>
        </div>
        <div className={scss.row}>
          <div className={scss.colortwo}></div>
          <h3>ghế chưa đặt</h3>
        </div>
        <br />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Bỏ chọn</th>
            </tr>
          </thead>
          {/* <tbody>
            {ThongTinPhim.map((item) => {
              return (
                <tr key={item.name}>
                  <th>{item.name}</th>
                  <th>{item.price}</th>
                  <th>
                    <button onClick={() => handleRemove(item)}>X</button>
                  </th>
                </tr>
              );
            })}
            <tr>
              <th>Tổng tiền</th>
              <th>
                {ThongTinPhim
                  .reduce((total, item) => {
                    return (total += item.price);
                  }, 0)
                  .toLocaleString()}
              </th>
            </tr>
          </tbody> */}
        </table>
        <br />
        <br />
        <button variant="primary" onClick={() => handleClear(ThongTinPhim)}>
          ĐẶT VÉ
        </button>
        {/* <button onClick={() =>handleClear(chaiting)}>ĐẶT VÉ</button> */}
      </div>
  );
};

export default SeatDetail;
