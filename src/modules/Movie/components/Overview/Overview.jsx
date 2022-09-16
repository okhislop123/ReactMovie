import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getThongTinPhim } from "../../slices/ThongTinPhimSlice";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { useNavigate } from "react-router-dom";

const Overview = ({ movieId }) => {
  // const {
  //   data: movie,
  //   isLoading,
  //   error,
  // } = useRequest(() => movieAPI.getMovieDetails(movieId));
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { ThongTinPhims, isLoading, error } = useSelector(
    (state) => state.thongtinphim
  );

  useEffect(() => {
    dispatch(getThongTinPhim(movieId));
  }, []);

  console.log(ThongTinPhims);
  const handleTicket = (ThongTinPhims) => {
    // movieAPI.getThongTinPhim(movieId)
    navigate(`/ticket/${ThongTinPhims}`);
  };

  if (!ThongTinPhims) {
    return null;
  }

  return (
    <div>
      <button onClick={() => handleTicket(ThongTinPhims)}>dat ve</button>
    </div>
  );
};

export default Overview;
