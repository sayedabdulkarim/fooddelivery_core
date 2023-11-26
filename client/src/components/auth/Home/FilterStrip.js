import React from "react";
import {
  HomeFilterStripFilterIcon,
  HomeFilterStripSortIcon,
} from "../../../utils/svgs";

const FilterStrip = () => {
  return (
    <div
      id="container-grid-filter-sort"
      className="filterStrip_container sc-gVJvzJ cJbckw"
    >
      <div>
        <div className="sc-eZYNyq Gwefh">
          <div className="sc-hHOBiw fUaZa">
            <div className="sc-ecPEgm hxCqch">
              <div className="sc-gdyeKB gymrnd">
                <div className="sc-aXZVg bjdsYL">Filter</div>
                <div className="sc-dSIIpw iOMfXs">
                  <HomeFilterStripFilterIcon />
                </div>
              </div>
            </div>
            <div className="sc-ecPEgm hxCqch">
              <div className="sc-dtInlm gyKZpB gymrnd">
                <div className="sc-aXZVg eNiJHh">Sort By</div>
                <div>
                  <HomeFilterStripSortIcon />
                </div>
              </div>
            </div>
            <div className="sc-ecPEgm hxCqch">
              <div className="sc-kOPcWz jhtQvq gymrnd">
                <div className="contents">
                  <div className="sc-aXZVg eNiJHh">Fast Delivery</div>
                </div>
              </div>
            </div>
            <div className="sc-ecPEgm hxCqch">
              <div className="sc-kOPcWz jhtQvq gymrnd">
                <div className="contents">
                  <div className="sc-aXZVg eNiJHh">New on Swiggy</div>
                </div>
              </div>
            </div>
            <div className="sc-ecPEgm hxCqch">
              <div className="sc-kOPcWz jhtQvq gymrnd">
                <div className="contents">
                  <div className="sc-aXZVg eNiJHh">Ratings 4.0+</div>
                </div>
              </div>
            </div>
            <div className="sc-ecPEgm hxCqch">
              <div className="sc-kOPcWz jhtQvq gymrnd">
                <div className="contents">
                  <div className="sc-aXZVg eNiJHh">Pure Veg</div>
                </div>
              </div>
            </div>
            <div className="sc-ecPEgm hxCqch">
              <div className="sc-kOPcWz jhtQvq gymrnd">
                <div className="contents">
                  <div className="sc-aXZVg eNiJHh">Offers</div>
                </div>
              </div>
            </div>
            <div className="sc-ecPEgm hxCqch">
              <div className="sc-kOPcWz jhtQvq gymrnd">
                <div className="contents">
                  <div className="sc-aXZVg eNiJHh">Rs. 300-Rs. 600</div>
                </div>
              </div>
            </div>
            <div className="sc-ecPEgm hxCqch">
              <div className="sc-kOPcWz jhtQvq gymrnd">
                <div className="contents">
                  <div className="sc-aXZVg eNiJHh">Less than Rs. 300</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FilterStrip;
