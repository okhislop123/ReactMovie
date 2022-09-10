import React from "react";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";

const Showtimes = ({ movieId }) => {
  const {
    data : movie,
    isLoading,
    error,
  } = useRequest(() =>movieAPI.getMovieCinema(movieId))
  // useRequest call API lấy lịch chiếu
  return <div>Showtimes</div>;
};

export default Showtimes;
