import React from "react";
import scss from "./style.module.scss";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const {
    data: movies,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovies());

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/movies/addmovie");
  };

  const onSelectProduct = (movieId) => {
    navigate(`/admin/movies/updatemovie/${movieId}`);
  };

  const handleClicka = () => {
    navigate("/admin/movies/time");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleDelete = (moveId, acces) => {
    movieAPI.DeleteMovie(moveId, acces);
  };

  const handleClickb = () =>{
    navigate("/admin/movies/user")
  }

  const handleClickc = () =>{
    navigate("/admin/movies")
  }
  return (
    <div className={scss.center}>
      <div className={scss.menu}>
        <div class={scss.names}>
          <h1>Menu</h1>
        </div>
        <ul>
          <li onClick={handleClickc}>
            <img src="/img/icon1.png" alt="" />
            <span>Phim</span>
          </li>
          <li onClick={handleClicka}>
            <img src="/img/icon2.png" alt="" />
            <span>Lịch chiếu</span>
          </li>
          <li onClick={handleClickb}>
            <img src="/img/icon4.png" alt="" />
            <span>User</span>
          </li>
        </ul>
      </div>
      <div class={scss.container}>
        <div class={scss.header}>
          <div class={scss.nav}>
            <div class={scss.search}>
              <input type="text" placeholder="Search..." />
              <button type="submit">
                <img src="/img/icon3.png" alt="" />
              </button>
            </div>
            <div class={scss.add}>
              <a href="#" class="btn" onClick={handleClick}>
                Thêm Phim
              </a>
            </div>
            <div class={scss.user}>
              <p>
                <img src="/img/icon4.png" alt="" /> {user.taiKhoan}
              </p>
              <a onClick={handleLogout}>Logout</a>
            </div>
          </div>
        </div>
        <div className={scss.content}>
          <h2>Danh sách phim</h2>
          <table className={scss.table}>
            <thead>
              <tr>
                <th>Mã phim</th>
                <th>Tên phim</th>
                <th>Hình ảnh</th>
                <th>Mô tả</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {movies?.map((movie) => {
                return (
                  <tr key={movie.maPhim}>
                    <td>{movie.maPhim}</td>
                    <td>{movie.tenPhim}</td>
                    <td>
                      <img src={movie.hinhAnh} width="70px" height="70px" />
                    </td>
                    <td>{movie.moTa}</td>
                    <td>
                      <button onClick={() => onSelectProduct(movie.maPhim)}>
                        Update
                      </button>
                      <button
                        onClick={() =>
                          handleDelete(movie.maPhim, user.accessToken)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
