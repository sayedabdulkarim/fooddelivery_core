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
    <div class="order_details_component">
      <div class="title"> Past Orders </div>
      {/*  */}
      <div class="_3xMk0 order_detail_item">
        {/*  */}
        <div class="g28rk item_top">
          <div class="_359Fc item_top_image">
            <img
              height="200"
              width="300"
              alt="img renderer"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/cnlhkx4qw7vcrasx8the"
            />
          </div>
          <div class="_2XWVq item_top_restaurant_details">
            <div class="_3h4gz title">Chai Point</div>
            <div class="_2haEe sub_title">Kalyan Nagar</div>
            <div class="_299_I order_date">
              ORDER #160896643069945 | Thu, Dec 7, 2023, 11:00 AM
            </div>
            <div class="_1ziWV view-details">VIEW DETAILS</div>
          </div>
        </div>
        {/*  */}
        <div class="_3SKK0 item_bottom">
          <div class="_33I3_">Banana Cake x 2</div>
          <div class="_2a27y">
            <button class="_3PUy8 f4Ovn">REORDER</button>
            <button class="_3PUy8">HELP</button>
          </div>
          <div class="_23DHc">
            Total Paid: <span class="_1jGfr"> 479 </span>
          </div>
        </div>
      </div>
      {/*  */}
      <div class="showMore">Show More Orders</div>
    </div>
  );
};

export default Orders;
