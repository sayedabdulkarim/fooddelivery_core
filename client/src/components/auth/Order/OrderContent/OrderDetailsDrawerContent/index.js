import React from "react";
import { getRestaurantById } from "../../../../../utils/commonHelper";

const Index = ({ getCurrentOrderDetails, allRestaurantsList }) => {
  const { restaurantId, addressDetails } = getCurrentOrderDetails;
  return (
    <div>
      {/*  */}
      <div className="location_details">
        <div className="_2d5vz">
          <div className="_3AnQo AL1Ok">
            <div className="_3OR7J">
              <span className="icon-location"></span>
            </div>
            <div>
              <div
                className="_3SB3Y"
                onClick={() =>
                  console.log(
                    { getCurrentOrderDetails, allRestaurantsList },
                    " getCurrentOrderDetails"
                  )
                }
              >
                {getRestaurantById(allRestaurantsList, restaurantId)?.name}
              </div>
              <div className="_2d1Bv">
                {" "}
                {getRestaurantById(allRestaurantsList, restaurantId)?.areaName}
              </div>
            </div>
          </div>
          <div className="_3AnQo">
            <div className="_3OR7J">
              <span className="icon-location"></span>
            </div>
            <div>
              <div className="_3SB3Y">{addressDetails?.type}</div>
              <div className="_2d1Bv">{addressDetails?.address}</div>
            </div>
          </div>
        </div>
        <div className="_2tXGx"></div>
      </div>
      {/*  */}
      <div className="item_details">
        <div className="_9xEZF">
          <div className="_1_7YY">1 ITEM</div>
          <div className="LunMQ">
            <div className="_3ix93">
              <i
                className="styles_icon__m6Ujp _3NEcG icon-NonVeg"
                role="presentation"
                aria-hidden="true"
              ></i>
              Banana Cake x 2
            </div>
            <div className="_1k5de">278</div>
          </div>
        </div>
        <div className="_15Yxr">
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
