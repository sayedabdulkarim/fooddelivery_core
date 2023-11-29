import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import useSticky from "../../../hooks/useSticky";
import { MoneyLogo, RestaurantTimeCostLogo } from "../../../utils/svgs";
import { arrayToString } from "../../../utils/commonHelper";
import { setRestaurantDetailsHeaderStick } from "../../../slices/restaurantSlice";

const RestaurantDetailsTopComponent = ({ restaurantDetails }) => {
  //misc
  const dispatch = useDispatch();
  const stickyRef = useRef(null);
  const isSticky = useSticky(stickyRef);

  //async
  useEffect(() => {
    dispatch(setRestaurantDetailsHeaderStick(isSticky));
  }, [isSticky, dispatch]);

  if (!restaurantDetails) {
    // Render a loading indicator or null if the data is not yet available
    return <div>Loading...</div>; // Or return null;
  }

  const {
    name,
    cuisines,
    areaName,
    costForTwo,
    sla,
    avgRating,
    totalRatingsString,
  } = restaurantDetails;

  return (
    <>
      {/* breadcrumb_sec */}
      <div
        className={`_2p-Tc _3jpiZ breadcrumb_container ${
          isSticky ? "restaurant_details_header_sticky" : ""
        }`}
        // style={{ backgroundColor: isSticky ? "red" : "green" }}
        ref={stickyRef}
      >
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
          <span className="kpkwa">{name ?? ""}</span>
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
              <p className="title">{name ?? ""}</p>
              <p className="cusines">{arrayToString(cuisines || [])}</p>
            </div>
            <div className="distance_section" aria-label="">
              <p className="address_area" aria-hidden="true">
                {areaName ?? ""},{" "}
              </p>
              <p className="address_lastMile" aria-hidden="true">
                {sla?.lastMileTravel} km
              </p>
            </div>
          </div>
          {/*  */}
          <div className="right_section">
            <span className="avgRating" aria-hidden="true">
              <span className="icon-star"></span> <span>{avgRating ?? ""}</span>{" "}
            </span>
            <span className="totalRatings" aria-hidden="true">
              {totalRatingsString ?? ""} ratings
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
            {sla?.lastMileTravel} kms | ₹34 Delivery fee will apply
          </span>
        </div>

        <hr className="dotted_separator" aria-hidden="true"></hr>

        <div className="below_section">
          {/* time cost */}
          <ul className="timeCost_wrapper">
            <li>
              <RestaurantTimeCostLogo />
              <span>{sla?.deliveryTime} MINS</span>
            </li>
            <li>
              <MoneyLogo />
              <span>{costForTwo ?? ""}</span>
            </li>
          </ul>
          {/* time cost */}
        </div>
      </div>
      {/* prod details */}
    </>
  );
};

export default RestaurantDetailsTopComponent;
