import React from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const homePageData = useSelector((state) => state.homeReducer.homePageData);

  // Check if userInfo is available
  if (!homePageData) {
    // You can return a loader, placeholder, or null if userInfo is not available
    return <div>Loading...</div>; // or null, or any placeholder
  }

  const { data } = homePageData;

  return (
    <div className="order_details_component">
      <div className="title"> Past Orders </div>
      {/*  */}
      <div className="order_detail_item">
        {/*  */}
        <div className="item_top">
          <div className="item_top_image">
            <img
              height="200"
              width="300"
              alt="img renderer"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/cnlhkx4qw7vcrasx8the"
            />
          </div>
          <div className="item_top_restaurant_details">
            <div className="title">Chai Point</div>
            <div className="sub_title">Kalyan Nagar</div>
            <div className="order_date">
              ORDER #160896643069945 | Thu, Dec 7, 2023, 11:00 AM
            </div>
            <div className="view-details">VIEW DETAILS</div>
          </div>
        </div>
        {/*  */}
        <div className="item_bottom">
          <div className=" item_count">Banana Cake x 2</div>
          <div className=" reorder">
            <button className=" isActive">REORDER</button>
            <button className="">HELP</button>
          </div>
          <div className="payment">
            Total Paid: <span> 479 </span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="showMore">Show More Orders</div>
    </div>
  );
};

export default Orders;
