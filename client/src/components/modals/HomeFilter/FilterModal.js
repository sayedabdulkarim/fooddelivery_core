import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "antd";
import { homePageFilterOptionsObj } from "../../../utils/constant";
//slice
import { applyStoreFilters } from "../../../slices/homeSlice";
//filter option vomponents
import SortComponent from "./OptionsComponents/Sort";
import DeliveryTimeComponent from "./OptionsComponents/DeliveryTime";
import CuisinesComponent from "./OptionsComponents/Cuisines";
import ExploreComponent from "./OptionsComponents/Explore";
import RatingsComponent from "./OptionsComponents/Ratings";
import VegNonVegComponent from "./OptionsComponents/VegNonVeg";
import CostForTwoComponent from "./OptionsComponents/CostForTwo";
import OffersComponent from "./OptionsComponents/Offers";

const FilterModal = ({
  isActiveOption,
  handleSetIsActiveOption,
  handleFilterChange,
  filters,
}) => {
  //misc
  const dispatch = useDispatch();

  //state
  const [isModalOpen, setIsModalOpen] = useState(false);

  //func
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log("OK calleddd");
    dispatch(applyStoreFilters());
    // setIsModalOpen(false);
  };

  const handleCancel = () => {
    console.log("Cancel calleddd");
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Filter"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="homeFilterModal"
        width={800}
        centered
      >
        <div className="sc-iEXKAA gQcZGA dwebBottomSheet">
          <div className="sc-lnPyaJ kriBiB">
            <div className="sc-ePDLzJ jRJFVS">
              <ul className="sc-cVzyXs ibgRwr">
                {Object.keys(homePageFilterOptionsObj).map((o) => {
                  return (
                    <li
                      className={`sc-YysOf eGsoBa ${
                        isActiveOption === o ? "isActiveOption" : ""
                      }`}
                      key={o}
                      onClick={() => handleSetIsActiveOption(o)}
                    >
                      <div className="item-wrapper">
                        <div className="sc-aXZVg cbGKQI">{o}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {/* right */}
              <div className="content">
                {isActiveOption === "Sort" ? (
                  <SortComponent
                    isActiveOption={isActiveOption}
                    homePageFilterOptionsObj={homePageFilterOptionsObj}
                    handleFilterChange={handleFilterChange}
                    filters={filters}
                  />
                ) : isActiveOption === "Delivery Time" ? (
                  <DeliveryTimeComponent
                    isActiveOption={isActiveOption}
                    homePageFilterOptionsObj={homePageFilterOptionsObj}
                    handleFilterChange={handleFilterChange}
                    filters={filters}
                  />
                ) : isActiveOption === "Cuisines" ? (
                  <CuisinesComponent
                    isActiveOption={isActiveOption}
                    homePageFilterOptionsObj={homePageFilterOptionsObj}
                    handleFilterChange={handleFilterChange}
                    filters={filters}
                  />
                ) : isActiveOption === "Explore" ? (
                  <ExploreComponent
                    isActiveOption={isActiveOption}
                    homePageFilterOptionsObj={homePageFilterOptionsObj}
                    handleFilterChange={handleFilterChange}
                    filters={filters}
                  />
                ) : isActiveOption === "Ratings" ? (
                  <RatingsComponent
                    isActiveOption={isActiveOption}
                    homePageFilterOptionsObj={homePageFilterOptionsObj}
                    handleFilterChange={handleFilterChange}
                    filters={filters}
                  />
                ) : isActiveOption === "Veg/ Non Veg" ? (
                  <VegNonVegComponent
                    isActiveOption={isActiveOption}
                    homePageFilterOptionsObj={homePageFilterOptionsObj}
                    handleFilterChange={handleFilterChange}
                    filters={filters}
                  />
                ) : isActiveOption === "Cost For Two" ? (
                  <CostForTwoComponent
                    isActiveOption={isActiveOption}
                    homePageFilterOptionsObj={homePageFilterOptionsObj}
                    handleFilterChange={handleFilterChange}
                    filters={filters}
                  />
                ) : isActiveOption === "Offers" ? (
                  <OffersComponent
                    isActiveOption={isActiveOption}
                    homePageFilterOptionsObj={homePageFilterOptionsObj}
                    handleFilterChange={handleFilterChange}
                    filters={filters}
                  />
                ) : (
                  ""
                )}
              </div>
              {/* right */}
            </div>
          </div>
          <button className="sc-EgOXT eYVseU" aria-label="click here to close">
            {/* SVG for close button */}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default FilterModal;
