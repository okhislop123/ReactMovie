import axiosClient from "./axiosClient";

const userAPI = {
  getUser: () => {
    return axiosClient.get("QuanLyNguoiDung/LayDanhSachNguoiDung", {
      params: {
        maNhom: "GP09",
      },
    });
  },
  UpdateUser: (userId, acces) =>{
    return axiosClient.post("QuanLyNguoiDung/LayThongTinNguoiDung",userId,{
    headers: {
      Authorization: `Bearer ${acces}`,
    }})
  }
};

export default userAPI;
