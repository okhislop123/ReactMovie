// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getBanners } from "../../slices/bannerSlice";

import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";

const TRAILERS = [
  "https://www.youtube.com/watch?v=TOFxa0w_gAo",
  "https://www.youtube.com/watch?v=TOFxa0w_gAo",
  "https://www.youtube.com/watch?v=TOFxa0w_gAo",
];

const Banner = () => {
  // const dispatch = useDispatch();
  // const { banners, isLoading, error } = useSelector((state) => state.banner);
  // useEffect(() => {
  //   dispatch(getBanners());
  // }, []);

  const {
    data: banners,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getBanners());

  const bannersMapped = banners?.map((banner, index) => {
    return { ...banner, trailer: TRAILERS[index] };
  });

  console.log(bannersMapped);

  return (
    <div style={{ display: "flex" }}>
      {bannersMapped?.map((banner) => {
        return (
          <img
            key={banner.maBanner}
            src={banner.hinhAnh}
            alt={`banner-${banner.maBanner}`}
            width="100px"
            height="100px"
          />
        );
      })}
    </div>
  );
};

export default Banner;
