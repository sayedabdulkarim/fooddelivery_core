import React, { useEffect } from "react";
import { Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//apiSlice
import { useGetUserRestaurantDetailsQuery } from "../../apiSlices/restaurantSlice";
import { setRestaurantDetails } from "../../slices/restaurantSlice";
import ProgressBar from "../../components/Progressbar";
import RestaurantDetailsComponent from "../../components/auth/Home/RestaurantDetailsComponent";

const Home = () => {
  //misc
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.authReducer);
  const { restaurantDetails } = useSelector((state) => state.restaurantReducer);

  // RTK Query hook
  const {
    data: getUserRestaurantDetails,
    refetch,
    isLoading: isLoadinGetUserRestaurantDetails,
  } = useGetUserRestaurantDetailsQuery();

  useEffect(() => {
    if (getUserRestaurantDetails) {
      dispatch(setRestaurantDetails(getUserRestaurantDetails));
    }
    // console.log({ getUserRestaurantDetails }, "getUserRestaurantDetails");
  }, [getUserRestaurantDetails, dispatch]);

  return (
    <div className="home_container">
      {isLoadinGetUserRestaurantDetails ? (
        <>
          <ProgressBar
            onStart={isLoadinGetUserRestaurantDetails}
            onEnd={!isLoadinGetUserRestaurantDetails}
          />
          <Skeleton active paragraph={{ rows: 15 }} />
        </>
      ) : userInfo?.data?.restaurant || restaurantDetails ? (
        <div>
          <RestaurantDetailsComponent
            restaurantDetails={restaurantDetails}
            userDetails={userInfo?.data}
          />
        </div>
      ) : (
        <div className="add_restaurant_btn_container">
          <div className="wrapper">
            <div>
              <h2
                className="title"
                onClick={() => console.log(userInfo, " usss")}
              >
                Hello {userInfo?.data?.name}, Please add restaurant.
              </h2>
              <Link to="restaurant">
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
