import userAPI from "apis/userAPI";
import useRequest from "hooks/useRequest";
import { useForm } from "react-hook-form";
import scss from "./styles.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const Times = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [values, setValues] = useState({
    taiKhoan: userId,
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "",
    maLoaiNguoiDung: "",
    hoTen: "",
  });


const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
      defaultValues: {
      taiKhoan: userId,
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    mode: "onTouched",
});

const handleChange = (evt) => {
  const { name, value } = evt.target;
  setValues({ ...values, [name]: value });
};

  const user = JSON.parse(localStorage.getItem("user"));
  
  const { data: UpdateUser, isLoading } = useRequest(
      (userId, user) => userAPI.UpdateUser(userId, user.accessToken),
      { isManual: true }
      );
  const onSubmit = async (userId) => {
    try {
      await UpdateUser(userId);
      // Thành công: gọi notification
      // Redirect về trang MovieList
      navigate("/admin/movies");
    } catch (error) {
      // Thất bại: gọi notification hiển thị error
    }
  };
  console.log(UpdateUser);

  return (
    <div className={scss.center}>
      <h1 className={scss.h1}>Update User</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
        <div className={scss.field}>
          <input
            type="text"
            id="taiKhoan"
            value={values.taiKhoan}
            name="taiKhoan"
            onChange={handleChange}
            {...register("taiKhoan", {
              required: {
                value: true,
                message: "tài khoản không được để trống",
              },
            })}
          />
          <span></span>
          <label>Tài khoản</label>
          {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
        </div>
        <div className={scss.field}>
          <input
            type="text"
            id="matKhau"
            value={values.matKhau}
            name="matKhau"
            onChange={handleChange}
            {...register("matKhau", {
              required: {
                value: true,
                message: "mật khẩu không được để trống",
              },
            })}
          />
          <span></span>
          <label>Mật khẩu</label>
          {errors.matKhau && <p>{errors.matKhau.message}</p>}
        </div>
        <div className={scss.field}>
          <input
            type="text"
            id="email"
            value={values.email}
            name="email"
            onChange={handleChange}
            {...register("email", {
              required: {
                value: true,
                message: "email không được để trống",
              },
            })}
          />
          <span></span>
          <label>Email</label>
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className={scss.field}>
          <input
            type="text"
            id="soDt"
            value={values.soDt}
            name="soDt"
            onChange={handleChange}
            {...register("soDt", {
              required: {
                value: true,
                message: "sđt không được để trống",
              },
            })}
          />
          <span></span>
          <label>Sđt</label>
          {errors.soDt && <p>{errors.soDt.message}</p>}
        </div>
        <div className={scss.field}>
          <input
            type="text"
            id="maNhom"
            name="maNhom"
            value={values.maNhom}
            onChange={handleChange}
            {...register("maNhom", {
              required: {
                value: true,
                message: "mã nhóm không được để trống",
              },
            })}
          />
          <span></span>
          <label>Mã nhóm</label>
          {errors.maNhom && <p>{errors.maNhom.message}</p>}
        </div>
        <div className={scss.field}>
          <input
            type="text"
            id="maLoaiNguoiDung"
            name="maLoaiNguoiDung"
            value={values.maLoaiNguoiDung}
            onChange={handleChange}
            {...register("maLoaiNguoiDung", {
              required: {
                value: true,
                message: "loại người dùng không được để trống",
              },
            })}
          />
          <span></span>
          <label>Loại người dùng</label>
          {errors.maLoaiNguoiDung && <p>{errors.maLoaiNguoiDung.message}</p>}
        </div>
        <div className={scss.field}>
          <input
            type="text"
            id="hoTen"
            name="hoTen"
            value={values.hoTen}
            onChange={handleChange}
            {...register("hoTen", {
              required: {
                value: true,
                message: "họ tên không được để trống",
              },
            })}
          />
          <span></span>
          <label>Họ tên</label>
          {errors.hoTen && <p>{errors.hoTen.message}</p>}
        </div>
        <button>Update User</button>
      </form>
    </div>
  );
};

export default Times;
