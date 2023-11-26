import React from "react";
import { useSelector } from "react-redux";
import TopRestaurantOfferBadge from "../../svgs/TopRestaurantOfferBadge";
import { RestaurantsRatingStar } from "../../../utils/svgs";
import { arrayToString } from "../../../utils/commonHelper";

const AllRestaurants = ({ isLoadingHomePage }) => {
  // Redux state
  const homePageData = useSelector((state) => state.homeReducer.homePageData);
  const allRestaurantsList = homePageData?.data?.allRestaurantsList || [];

  return (
    <div className="home_best_offers home_all_restaurants">
      <div className="sc-esYiGF cfAhyi title_section">
        <div className="sc-fXSgeo FedBt">
          <h2
            onClick={() => console.log(allRestaurantsList)}
            className="sc-aXZVg fRsBsl title"
          >
            Restaurants with online food delivery in Bangalore
          </h2>
          <div className="sc-aXZVg dtXMSY"></div>
        </div>
      </div>

      <div className="TopRestaurantSection">
        <div className="Imagesdiv">
          <ul>
            {allRestaurantsList.map((item, index) => {
              const {
                _id,
                badges,
                cloudinaryImageId,
                name,
                ggregatedDiscountInfoV3,
                avgRating,
                sla,
                cuisines,
                areaName,
              } = item;

              return (
                <li key={_id}>
                  {/* {item?.badges && <TopRestaurantOfferBadge />} */}
                  {<TopRestaurantOfferBadge isShow={badges} />}
                  <div className="image_wrapper">
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                      alt={name}
                      loading="lazy"
                    />
                  </div>
                  {/* detail wrapper */}
                  <div className="detail_wrapper">
                    <div>
                      <div className="sc-aXZVg kIsYLE">{name}</div>
                    </div>
                    <div className="sw-restaurant-card-subtext-container">
                      <div>
                        <RestaurantsRatingStar />
                      </div>
                      <div className="sc-aXZVg icltun">
                        <span className="sc-aXZVg jxDVMd">{avgRating} • </span>
                        {sla?.deliveryTime || 0} mins
                      </div>
                    </div>
                    <div className="sw-restaurant-card-descriptions-container">
                      <div className="sc-aXZVg ftrPfO">
                        {arrayToString(cuisines)}
                      </div>
                      <div className="sc-aXZVg ftrPfO">{areaName}</div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <h1>AllRestaurants</h1>
      <h1>AllRestaurants</h1>
      <h1>AllRestaurants</h1>
      <h1>AllRestaurants</h1>
    </div>
  );
};

export default AllRestaurants;
