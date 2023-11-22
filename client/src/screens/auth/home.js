import React from "react";
//apiSLice
import { useGetHomePageDataQuery } from "../../apiSlices/homeApiSlice";
//comps
import BestOffers from "../../components/auth/Home/BestOffers";
import ShowSkeleton from "../../components/skeleton/homeSkeleton";

const Home = () => {
  const {
    data: getHomePageData,
    refetch,
    isLoading: isLoadingHomePage,
  } = useGetHomePageDataQuery();

  return (
    <div className="home_container fXbKft">
      {isLoadingHomePage && (
        <ShowSkeleton
          isLoading={isLoadingHomePage}
          numSkeletons={40}
          columnsPerRow={4}
        />
      )}
      <BestOffers />
    </div>
  );
};

export default Home;
