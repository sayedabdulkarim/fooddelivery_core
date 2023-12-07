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
      <div>
        <div class="_3xMk0">
          <div class="g28rk">
            <div class="_359Fc">
              <img
                class=""
                imageid="cnlhkx4qw7vcrasx8the"
                height="200"
                width="300"
                imageurl=""
                alt="img renderer"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/cnlhkx4qw7vcrasx8the"
              />
            </div>
            <div class="_2XWVq">
              <div class="_3h4gz">Chai Point</div>
              <div class="_2haEe">Kalyan Nagar</div>
              <div class="_299_I">
                ORDER #160896643069945 | Thu, Dec 7, 2023, 11:00 AM
              </div>
              <div class="_1ziWV">VIEW DETAILS</div>
              <div class="_2fkm7">
                <span>
                  Cancelled on Thu, Dec 7, 2023, 11:01 AM
                  <span class="hDcdF icon-alert"></span>
                </span>
              </div>
            </div>
          </div>
          <div class="_3SKK0">
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
      </div>
      <div>
        <div class="_3xMk0">
          <div class="g28rk">
            <div class="_359Fc">
              <img
                class=""
                imageid="vlkvl6fgipp8x5m48cpo"
                height="200"
                width="300"
                imageurl=""
                alt="img renderer"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/vlkvl6fgipp8x5m48cpo"
              />
            </div>
            <div class="_2XWVq">
              <div class="_3h4gz">Eat Station</div>
              <div class="_2haEe">Danipali</div>
              <div class="_299_I">
                ORDER #168434386216 | Mon, May 29, 2023, 04:49 PM
              </div>
              <div class="_1ziWV">VIEW DETAILS</div>
              <div class="_2fkm7">
                <span>
                  Delivered on Mon, May 29, 2023, 05:31 PM
                  <span class="h-Ntp icon-tickSharp"></span>
                </span>
              </div>
            </div>
          </div>
          <div class="_3SKK0">
            <div class="_33I3_">
              Chicken Burger Combo1 x 1, Fried Chicken Sub Sandwich x 1
            </div>
            <div class="_2a27y">
              <button class="_3PUy8 f4Ovn">REORDER</button>
              <button class="_3PUy8">HELP</button>
            </div>
            <div class="_23DHc">
              Total Paid: <span class="_1jGfr"> 413 </span>
            </div>
          </div>
        </div>
      </div>
      <div class="_3eCKY">Show More Orders</div>
    </div>
  );
};

export default Orders;
