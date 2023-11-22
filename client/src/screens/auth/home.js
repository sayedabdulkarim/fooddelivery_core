import React from "react";
//apiSLice
import { useGetHomePageDataQuery } from "../../apiSlices/homeApiSlice";
//comps
import BestOffers from "../../components/auth/Home/BestOffers";

const Home = () => {
  const {
    data: getHomePageData,
    refetch,
    isLoading: isLoadingPost,
  } = useGetHomePageDataQuery();

  return (
    <div className="home_container fXbKft">
      <BestOffers />
    </div>
  );
};

export default Home;
