import React, { useEffect, useState, useRef } from "react";
import { Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//apiSlice
import {
  useGetUserRestaurantDetailsQuery,
  useGetRestaurantMenuQuery,
} from "../../apiSlices/restaurantApiSlice";
import { setRestaurantDetails } from "../../slices/restaurantSlice";
import {
  setMenuCategoryModal,
  setRestaurantMenuDetails,
} from "../../slices/menuSlice";
import ProgressBar from "../../components/Progressbar";
import RestaurantDetailsComponent from "../../components/auth/Home/RestaurantDetailsComponent";
import { skipToken } from "@reduxjs/toolkit/query/react"; // Import skipToken
import CategoryModal from "../../components/auth/Menu/category";
import { areAllItemsEmpty } from "../../utils/commonHelper";
import { Accordion } from "../../components/auth/Menu/Accordion";
import MenuAccordion from "../../components/auth/Menu/Accordion/MenuAccordion";

const Home = () => {
  //misc
  const categoryRefs = useRef({});
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.authReducer);
  const { restaurantDetails } = useSelector((state) => state.restaurantReducer);

  // RTK Query hook
  const {
    data: getUserRestaurantDetails,
    refetch,
    isLoading: isLoadinGetUserRestaurantDetails,
  } = useGetUserRestaurantDetailsQuery();

  const {
    data: getRestaurantMenu,
    refetch: getRestaurantMenuRefetch,
    isLoading: isLoadingetRestaurantMenu,
  } = useGetRestaurantMenuQuery(restaurantDetails?._id ?? skipToken);
  // } = useGetRestaurantMenuQuery("6562b871e80e73e2cb0e696e");

  //async
  useEffect(() => {
    if (getUserRestaurantDetails) {
      dispatch(setRestaurantDetails(getUserRestaurantDetails));
    }
  }, [getUserRestaurantDetails, dispatch]);

  useEffect(() => {
    if (restaurantDetails?._id) {
      getRestaurantMenuRefetch();
    }
  }, [restaurantDetails, getRestaurantMenuRefetch]);

  useEffect(() => {
    if (getRestaurantMenu) {
      dispatch(setRestaurantMenuDetails(getRestaurantMenu));
    }
  }, [dispatch, getRestaurantMenu]);

  // useEffect(() => {})

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
          {getRestaurantMenu ? (
            // {!areAllItemsEmpty(getRestaurantMenu?.restaurantMenu?.menu || []) ? (
            <div className="menu_list_container">
              <div className="add_menu_container">
                <button onClick={() => dispatch(setMenuCategoryModal(true))}>
                  Add Menu
                </button>
                <CategoryModal />
              </div>

              <h2
                onClick={() =>
                  console.log(getRestaurantMenu?.restaurantMenu?.menu)
                }
              >
                Menu Items
              </h2>
              {/* <Accordion
                categories={getRestaurantMenu?.restaurantMenu?.menu || []}
                categoryRefs={categoryRefs}
              /> */}
              <MenuAccordion
                menuData={getRestaurantMenu?.restaurantMenu?.menu || []}
              />
            </div>
          ) : (
            <div className="add_menu_container">
              <h4>Seems, you don't have any menu items for your restaurant.</h4>
              <button onClick={() => dispatch(setMenuCategoryModal(true))}>
                Add Menu
              </button>
              <CategoryModal />
            </div>
          )}
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
