import React, { useEffect } from "react";
import { Skeleton } from "antd";
import { useDispatch } from "react-redux";
import ProgressBar from "../../components/ProgressBar";

import FavoritesComponent from "../../components/auth/Favorites";

import { useGetHomePageDataQuery } from "../../apiSlices/homeApiSlice";
import { setHomePageData } from "../../slices/homeSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  // RTK Query hook
  const {
    data: getHomePageData,
    refetch,
    isLoading: isLoadingHomePage,
  } = useGetHomePageDataQuery();

  //async
  useEffect(() => {
    if (getHomePageData) {
      dispatch(setHomePageData(getHomePageData));
    }
  }, [getHomePageData, dispatch]);
  //
  const isLoading = isLoadingHomePage;

  return (
    <div className=" favorite_container">
      {isLoading ? (
        <>
          <ProgressBar onStart={isLoading} onEnd={!isLoading} />
          <Skeleton active paragraph={{ rows: 15 }} />
        </>
      ) : (
        <div className="order_container">
          <FavoritesComponent />
        </div>
      )}
    </div>
  );
};

export default Favorites;
