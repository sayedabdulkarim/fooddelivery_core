import React from "react";
import { useSelector } from "react-redux";
import TopRestaurantOfferBadge from "../../svgs/TopRestaurantOfferBadge";

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
        <div className={"Imagesdiv"}>
          <ul>
            {allRestaurantsList.map((item, index) => (
              <li key={index}>
                {/* {item?.badges && <TopRestaurantOfferBadge />} */}
                {<TopRestaurantOfferBadge isShow={item?.badges} />}
                <div className="image_wrapper">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.cloudinaryImageId}`}
                    alt={item.name}
                    loading="lazy"
                  />
                </div>
              </li>
            ))}
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
