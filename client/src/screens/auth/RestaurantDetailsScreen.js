import React, { useEffect, useState } from "react";
import { Skeleton } from "antd";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetRestaurantDetailsByIdQuery } from "../../apiSlices/restaurantDetailsSlice";
import { setRestaurantDetailsById } from "../../slices/restaurantSlice";
import RestaurantDetailsTopComponent from "../../components/auth/RestaurantDetails/RestaurantDetailsTopComponent";
import { Accordion } from "../../components/Accordion";
import ProgressBar from "../../components/ProgressBar";
import { setMenuBottomSlice } from "../../slices/menuBottomSlice";
import MenuStickBottom from "../../components/MenuStickBottom";
import RestaurantMenuModal from "../../components/modals/RestaurantMenuModal";

const RestaurantDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  //state
  const [isShowMenu, setIsShowMenu] = useState(false);

  //queries n mutation
  const {
    data: getRestaurantDetailById,
    isLoading: isLoadingRestaurantDetail,
  } = useGetRestaurantDetailsByIdQuery(id);
  // Redux state
  const { restaurantDetails } = useSelector(
    (state) => state.restaurantDetailReducer
  );

  useEffect(() => {
    if (getRestaurantDetailById) {
      dispatch(setRestaurantDetailsById(getRestaurantDetailById));
    }
  }, [getRestaurantDetailById, dispatch]);

  useEffect(() => {
    dispatch(setMenuBottomSlice(true));

    return () => dispatch(setMenuBottomSlice(false));
  }, [dispatch]);

  console.log(isShowMenu, "isShowMenuisShowMenu");

  return (
    <div className="nDVxx restaurant_details_section">
      <ProgressBar
        onStart={isLoadingRestaurantDetail}
        onEnd={!isLoadingRestaurantDetail}
      />

      <div className="OF_5P restaurant_details_container">
        <button
          onClick={() =>
            console.log(
              restaurantDetails?.data,
              "restaurantDetailsrestaurantDetails"
            )
          }
        >
          restaurantDetails
        </button>
        {/* top_section */}
        {isLoadingRestaurantDetail ? (
          <Skeleton active paragraph={{ rows: 20 }} />
        ) : (
          <>
            <RestaurantDetailsTopComponent
              restaurantDetails={restaurantDetails?.data}
            />
            {/* bottom_section */}
            <Accordion categories={restaurantDetails?.data?.menu?.menu || []} />

            {/* menu stick bottom */}
            <RestaurantMenuModal
              isShowMenu={isShowMenu}
              setIsShowMenu={setIsShowMenu}
              restaurantCategories={restaurantDetails?.data?.menu?.menu || []}
            />
            <MenuStickBottom
              isShowMenu={isShowMenu}
              setIsShowMenu={setIsShowMenu}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetails;
