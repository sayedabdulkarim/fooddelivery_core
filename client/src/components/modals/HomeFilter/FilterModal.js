import React, { useState } from "react";
import { Button, Modal } from "antd";
import { homePageFilterOptionsObj } from "../../../utils/constant";
//filter option vomponents
import SortComponent from "./OptionsComponents/Sort";
import DeliveryTimeComponent from "./OptionsComponents/DeliveryTime";
import CuisinesComponent from "./OptionsComponents/Cuisines";
import ExploreComponent from "./OptionsComponents/Explore";
import RatingsComponent from "./OptionsComponents/Ratings";
import VegNonVegComponent from "./OptionsComponents/VegNonVeg";
import CostForTwoComponent from "./OptionsComponents/CostForTwo";

const FilterModal = ({ isActiveOption, handleSetIsActiveOption }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
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
                      className="sc-YysOf eGsoBa"
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
                <SortComponent
                  isActiveOption={isActiveOption}
                  homePageFilterOptionsObj={homePageFilterOptionsObj}
                />
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
