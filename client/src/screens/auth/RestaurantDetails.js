import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetRestaurantDetailsByIdQuery } from "../../apiSlices/restaurantDetailsSlice";
import { setRestaurantDetailsById } from "../../slices/restaurantSlice";
import { Breadcrumb } from "antd";

//

const App = () => (
  <Breadcrumb
    items={[
      {
        title: "Home",
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: "An Application",
      },
    ]}
  />
);

const RestaurantDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  //queries n mutation
  const {
    data: getRestaurantDetailById,
    isLoading: isLoadingRestaurantDetail,
    //   } = useGetRestaurantDetailsByIdQuery("6562b871e80e73e2cb0e696e");
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
      {/* <button
          onClick={() => console.log(restaurantDetails, " restaurantDetails")}
        >
          CLick
        </button> */}
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
              <span class="avgRating" aria-hidden="true">
                <span class="icon-star"></span> <span>4.0</span>{" "}
              </span>
              <span class="totalRatings" aria-hidden="true">
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
            <span class="message_text" aria-hidden="true">
              0.1 kms | ₹34 Delivery fee will apply
            </span>
          </div>

          <hr className="dotted_separator" aria-hidden="true"></hr>

          <div className="below_section">
            {/* time cost */}
            <ul class="timeCost_wrapper">
              <li class="">
                <svg
                  class="RestaurantTimeCost_icon__8UdT4"
                  width="16"
                  height="22"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <circle
                    r="8.35"
                    transform="matrix(-1 0 0 1 9 9)"
                    stroke="#3E4152"
                    stroke-width="1.3"
                  ></circle>
                  <path
                    d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                    fill="#3E4152"
                  ></path>
                </svg>
                <span>27 MINS</span>
              </li>
              <li class="RestaurantTimeCost_item__2HCUz">
                <svg
                  class="RestaurantTimeCost_icon__8UdT4"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="8.25"
                    stroke="#3E4152"
                    stroke-width="1.5"
                  ></circle>
                  <path
                    d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                    fill="#3E4152"
                  ></path>
                </svg>
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
