import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetRestaurantDetailsByIdQuery } from "../../apiSlices/restaurantDetailsSlice";
import { setRestaurantDetailsById } from "../../slices/restaurantSlice";
import RestaurantDetailsTopComponent from "../../components/auth/RestaurantDetails/RestaurantDetailsTopComponent";

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
      <div className="OF_5P restaurant_details_container">
        {/* top_section */}
        <RestaurantDetailsTopComponent />
        {/* bottom_section */}
      </div>
    </div>
  );
};

export default RestaurantDetails;
