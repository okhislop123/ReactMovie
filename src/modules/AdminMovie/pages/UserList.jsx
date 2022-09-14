import React from "react";
import scss from "./style.module.scss";
import useRequest from "hooks/useRequest";
import { useNavigate } from "react-router-dom";
import userAPI from "apis/userAPI";

const UserList = () => {
  const { data: users } = useRequest(() => userAPI.getUser());
  console.log(users);


  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const handleClicka = () => {
    navigate("/admin/movies/time");
  };

  const handleClickb = () => {
    navigate("/admin/movies/user");
  };

  const handleClickc = () => {
    navigate("/admin/movies");
  };

  const onSelectProduct = (userId) =>{
    userAPI.UpdateUser(userId)
    navigate(`/admin/movies/updateuser/${userId}`)
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
                Thêm User
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
          <h2>Danh sách User</h2>
          <table className={scss.table}>
            <thead>
              <tr>
                <th>Tài khoản</th>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Sđt</th>
                <th>Mật khẩu</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => {
                return (
                  <tr key={user.taiKhoan}>
                    <td>{user.taiKhoan}</td>
                    <td>{user.hoTen}</td>
                    <td>{user.email}</td>
                    <td>{user.soDT}</td>
                    <td>{user.matKhau}</td>
                    <td>
                      <button
                        onClick={() => onSelectProduct(user.taiKhoan)}
                      >
                        Update
                      </button>
                      <button
                      // onClick={() =>
                      //   handleDelete(movie.maPhim, user.accessToken)
                      // }
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

export default UserList;
