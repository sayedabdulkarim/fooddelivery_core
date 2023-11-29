import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetRestaurantDetailsByIdQuery } from "../../apiSlices/restaurantDetailsSlice";
import { setRestaurantDetailsById } from "../../slices/restaurantSlice";
import RestaurantDetailsTopComponent from "../../components/auth/RestaurantDetails/RestaurantDetailsTopComponent";
import { Accordion } from "../../components/Accordion";
import ProgressBar from "../../components/ProgressBar";

const RestaurantDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
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

  return (
    <div className="nDVxx restaurant_details_section">
      <ProgressBar
        onStart={isLoadingRestaurantDetail}
        onEnd={!isLoadingRestaurantDetail}
      />

      <div className="OF_5P restaurant_details_container">
        {/* <button
          onClick={() =>
            console.log(
              restaurantDetails?.data,
              "restaurantDetailsrestaurantDetails"
            )
          }
        >
          restaurantDetails
        </button> */}
        {/* top_section */}
        {isLoadingRestaurantDetail ? (
          <h1>...Loading</h1>
        ) : (
          <>
            <RestaurantDetailsTopComponent
              restaurantDetails={restaurantDetails?.data}
            />
            {/* bottom_section */}
            <Accordion categories={restaurantDetails?.data?.menu?.menu || []} />
            ;
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetails;
