import axiosClient from "./axiosClient";

const movieAPI = {
  getMovies: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP09",
      },
    });
  },

  getBanners: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },

  getMovieDetails: (movieId) => {
    return axiosClient.get("QuanLyPhim/LayThongTinPhim", {
      params: {
        maPhim: movieId,
      },
    });
  },
  getThongTinPhim:(movieId) =>{
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim",{
      params: {
        maPhim : movieId
      }
    })
  },
  getLayGhe:(ticketId) =>{
    return axiosClient.get("QuanLyDatVe/LayDanhSachPhongVe",{
      params: {
        MaLichChieu : ticketId
      }
    })
  },
  datVe: (data,acces) =>{
    return axiosClient.post("QuanLyDatVe/DatVe",{
      ...data,
      headers:{
        Authorization: `Bearer ${acces}`,
      }
    })
  },
  addMovie: (movie) => {
    // Đối với dữ liệu có định dạng đặc biệt như File,...
    // Ta cần phải tạo ra FormData để lưu trữ
    const formData = new FormData();

    // Duyệt qua từng thuộc tính trong object movie và thêm vào formData
    for (let key in movie) {
      formData.append(key, movie[key]);
    }
    formData.append("maNhom", "GP09");
    return axiosClient.post("QuanLyPhim/ThemPhimUploadHinh", formData);
  },
  DeleteMovie:(movieId, acces) => {
    return axiosClient.delete("QuanLyPhim/XoaPhim", {
      headers: {
        Authorization: `Bearer ${acces}`,
      },
      params: {
        maPhim: movieId,
      },
    });
  },
  UpdateMovie: (movieId) => {
    const formData = new FormData();
    for (let key in movieId) {
      if (key === "maPhim") continue;
      formData.append(key, movieId[key]);
    }
    formData.append("maNhom", "GP09");
    formData.append("maPhim", movieId);
    return axiosClient.post("QuanLyPhim/CapNhatPhimUpload", formData);
  },
  ShowTime: (values, acces) =>{
    return axiosClient.post("QuanLyDatVe/TaoLichChieu",{
      ...values,
      headers:{
        Authorization: `Bearer ${acces}`,
      },
    })
  }
};

export default movieAPI;
