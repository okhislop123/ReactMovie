import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ children }) => {
  // const { user } = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log("user", user);
  // if (user.maLoaiNguoiDung === "KhachHang") {
  //   return <Navigate to="/" />;
  // }

  // đã đăng nhập
  return children;
};

export default AdminRoute;
