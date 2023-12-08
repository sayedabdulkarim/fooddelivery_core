import React from "react";
import { getRestaurantById } from "../../../../../utils/commonHelper";

const Index = ({ getCurrentOrderDetails, allRestaurantsList }) => {
  const { restaurantId, addressDetails } = getCurrentOrderDetails;
  return (
    <div>
      {/*  */}
      <div className="location_details">
        <div className="location_details_container">
          {/*  */}
          <div className="restaurant_name">
            <div className="icon_container">
              <span className="icon-location"></span>
            </div>
            <div>
              <div
                className=" restaurant_title"
                onClick={() =>
                  console.log(
                    { getCurrentOrderDetails, allRestaurantsList },
                    " getCurrentOrderDetails"
                  )
                }
              >
                {getRestaurantById(allRestaurantsList, restaurantId)?.name}
              </div>
              <div className="area_name">
                {" "}
                {getRestaurantById(allRestaurantsList, restaurantId)?.areaName}
              </div>
            </div>
          </div>
          {/*  */}
          <div className="restaurant_address_container">
            <div className=" icon_container">
              <span className="icon-location"></span>
            </div>
            <div className="detail_container">
              <div className=" address_type">{addressDetails?.type}</div>
              <div className=" address_det">{addressDetails?.address}</div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="divider"></div>
      </div>
      {/*  */}
      <div className="item_details">
        {/*  */}
        <div className="item_details_product">
          <div className="count">1 ITEM</div>
          <div className="desc_price">
            <div className="desc">
              <i
                className="icon-NonVeg"
                role="presentation"
                aria-hidden="true"
              ></i>
              Banana Cake x 2
            </div>
            <div className="price">278</div>
          </div>
        </div>
        {/*  */}
        <div className="_15Yxr price_description">
          <div>
            <div className="_3l9s2">
              <div className="_3l_-K UCNHQ">Item Total</div>
              <div>
                <span className="_3IQOi">278.00</span>
              </div>
            </div>
          </div>
          <div>
            <div className="_3l9s2">
              <div className="_3l_-K">Order Packing Charges</div>
              <div>
                <span className="_3IQOi">30.00</span>
              </div>
            </div>
          </div>
          <div>
            <div className="_3l9s2">
              <div className="_3l_-K">1 Month Plan Membership</div>
              <div>
                <span className="_3IQOi">1.00</span>
              </div>
            </div>
          </div>
          <div>
            <div className="_3l9s2">
              <div className="_3l_-K">Platform fee</div>
              <div>
                <span className="_3IQOi">3.00</span>
              </div>
            </div>
          </div>
          <div>
            <div className="_3l9s2">
              <div className="_3l_-K">Delivery partner fee</div>
              <div>
                <span className="_3IQOi">153.00</span>
              </div>
            </div>
          </div>
          <div>
            <div className="_3l9s2">
              <div className="_3l_-K">Taxes</div>
              <div>
                <span className="_3IQOi">14.44</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="payment_details">
        <div className="_2FcHT">
          <div className="_2ggYC">
            <div className="_8b3yo">Paid Via Cash</div>
            <div className="_2m6Fe">
              <div className="_1OfuV">Bill Total</div>
              <div className="rupee">479.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="_2MUP_">sticky_sentinel sticky_sentinel--bottom</div>
    </div>
  );
};

export default Index;
