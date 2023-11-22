import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//apiSLice
import { useGetHomePageDataQuery } from "../../apiSlices/homeApiSlice";
//dispatcher
import { setHomePageData } from "../../slices/homeSlice";
//comps
import BestOffers from "../../components/auth/Home/BestOffers";
import ShowSkeleton from "../../components/skeleton/homeSkeleton";
import TopRestaurantSection from "../../components/auth/Home/TopRestaurants";

const Home = () => {
  // Dispatch
  const dispatch = useDispatch();

  // RTK Query hook
  const {
    data: getHomePageData,
    refetch,
    isLoading: isLoadingHomePage,
  } = useGetHomePageDataQuery();

  useEffect(() => {
    if (getHomePageData) {
      dispatch(setHomePageData(getHomePageData));
    }
  }, [getHomePageData, dispatch]);

  return (
    <div className="home_container fXbKft">
      {isLoadingHomePage ? (
        <ShowSkeleton
          isLoading={isLoadingHomePage}
          numSkeletons={40}
          columnsPerRow={4}
        />
      ) : (
        <>
          <BestOffers />
          <TopRestaurantSection />
        </>
      )}
    </div>
  );
};

export default Home;
