import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetRestaurantDetailsByIdQuery } from "../../apiSlices/restaurantDetailsSlice";
import { setRestaurantDetailsById } from "../../slices/restaurantSlice";
import { MoneyLogo, RestaurantTimeCostLogo } from "../../utils/svgs";

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
        {/* breadcrumb_sec */}
        <div className="_2p-Tc _3jpiZ breadcrumb_container">
          <div className="left_section">
            <span>
              <a href="https://www.swiggy.com/" data-url="/" className="kpkwa">
                <span className="_3duMr">Home</span>
              </a>
            </span>
            <span className="_1yRfx"></span>
            <span>
              <a
                href="https://www.swiggy.com/city/bangalore"
                data-url="/city/bangalore"
                className="kpkwa"
              >
                <span className="_3duMr">Bangalore</span>
              </a>
            </span>
            <span className="_1yRfx"></span>
            <span className="kpkwa">Rolls on Wheels</span>
          </div>

          <div className="right_section">
            <div className="MenuTopHeader_rightNav__alWSF">
              <button
                className="MenuTopHeader_rightNavItem__3dysE"
                data-testid="menu-favorite-button"
                role="checkbox"
                aria-checked="false"
                aria-label="Mark as favourite"
              >
                <span className="icon-heartInverse"></span>
              </button>
              <button
                className="MenuTopHeader_rightNavItem__3dysE"
                data-cy="menu-search-button"
                aria-label="Search items"
              >
                <span className="icon-magnifier"></span>
              </button>
            </div>
          </div>
        </div>
        {/* breadcrumb_sec */}
        {/* prod details */}
        <div className="prod_details">
          <div className="top_section">
            {/*  */}
            <div className="left_section">
              <div aria-hidden="true" className="name_section">
                <p className="title">Rolls on Wheels</p>
                <p className="cusines">Fast Food, North Indian</p>
              </div>
              <div className="distance_section" aria-label="">
                <p className="address_area" aria-hidden="true">
                  Geddalahalli,{" "}
                </p>
                <p className="address_lastMile" aria-hidden="true">
                  0.1 km
                </p>
              </div>
            </div>
            {/*  */}
            <div className="right_section">
              <span className="avgRating" aria-hidden="true">
                <span className="icon-star"></span> <span>4.0</span>{" "}
              </span>
              <span className="totalRatings" aria-hidden="true">
                500+ ratings
              </span>
            </div>
          </div>

          <div className="mid_section">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu"
              alt="DISTANCE_FEE_NON_FOOD_LM"
              aria-hidden="true"
            />
            <span className="message_text" aria-hidden="true">
              0.1 kms | ₹34 Delivery fee will apply
            </span>
          </div>

          <hr className="dotted_separator" aria-hidden="true"></hr>

          <div className="below_section">
            {/* time cost */}
            <ul className="timeCost_wrapper">
              <li>
                <RestaurantTimeCostLogo />
                <span>27 MINS</span>
              </li>
              <li>
                <MoneyLogo />
                <span>₹300 for two</span>
              </li>
            </ul>
            {/* time cost */}
          </div>
        </div>
        {/* prod details */}
      </div>
    </div>
  );
};

export default RestaurantDetails;
