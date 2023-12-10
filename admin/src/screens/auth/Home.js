import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//apiSLice
import { useGetUserRestaurantDetailsQuery } from "../../apiSlices/restaurantSlice";

const Home = () => {
  //misc
  const { userInfo } = useSelector((state) => state.authReducer);

  //
  // RTK Query hook
  const {
    data: getUserRestaurantDetails,
    refetch,
    isLoading: isLoadinGetUserRestaurantDetails,
  } = useGetUserRestaurantDetailsQuery();

  useEffect(() => {
    console.log({ getUserRestaurantDetails }, "getUserRestaurantDetails");
  }, [getUserRestaurantDetails]);

  return (
    <div className="home_container">
      {userInfo?.data?.restaurant ? (
        <div>
          <h1 onClick={() => console.log(userInfo?.data?.restaurant)}>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
        </div>
      ) : (
        <div className="add_restaurant_btn_container">
          <div className="wrapper">
            <div>
              <h2>Please add restaurant.</h2>
              <Link to={"restaurant"}>
                <button>Add Restaurant</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
