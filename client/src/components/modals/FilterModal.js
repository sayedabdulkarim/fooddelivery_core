import React, { useState } from "react";
import { Button, Modal } from "antd";

const App = () => {
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
          <div className="sc-iXzfSG dSLBnV">
            {/* <div className="sc-aXZVg iCWdvm">Filter</div> */}
          </div>
          <div className="sc-lnPyaJ kriBiB">
            <div className="sc-ePDLzJ jRJFVS">
              <ul className="sc-cVzyXs ibgRwr">
                <li className="sc-YysOf eGsoBa">
                  <div className="item-wrapper">
                    <div className="sc-aXZVg cbGKQI">Sort</div>
                  </div>
                </li>
                <li className="sc-YysOf eGsoBa">
                  <div className="item-wrapper">
                    <div className="sc-aXZVg cbGKQI">Sort</div>
                  </div>
                </li>
                <li className="sc-YysOf eGsoBa">
                  <div className="item-wrapper">
                    <div className="sc-aXZVg cbGKQI">Sort</div>
                  </div>
                </li>
                <li className="sc-YysOf eGsoBa">
                  <div className="item-wrapper">
                    <div className="sc-aXZVg cbGKQI">Sort</div>
                  </div>
                </li>
                <li className="sc-YysOf eGsoBa">
                  <div className="item-wrapper">
                    <div className="sc-aXZVg cbGKQI">Sort</div>
                  </div>
                </li>
                <li className="sc-YysOf eGsoBa">
                  <div className="item-wrapper">
                    <div className="sc-aXZVg cbGKQI">Delivery Time</div>
                  </div>
                </li>
                <li className="sc-YysOf eGsoBa">
                  <div className="item-wrapper">
                    <div className="sc-aXZVg cbGKQI">Cuisines</div>
                  </div>
                </li>
                <li className="sc-YysOf eGsoBa">
                  <div className="item-wrapper">
                    <div className="sc-aXZVg cbGKQI">Cost for two</div>
                  </div>
                </li>
              </ul>
              <div className="content">
                <div className="sc-aXZVg jxDVMd">
                  <div className="sc-eulNck gNHAci">
                    <div className="sc-aXZVg hMjUKj">Sort By</div>
                  </div>
                  <div className="sc-bXCLTC hcmGqD">
                    {/* Radio buttons and labels would be mapped here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="sc-EgOXT eYVseU" aria-label="click here to close">
            {/* SVG for close button */}
          </button>
        </div>

        {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
      </Modal>
    </div>
  );
};

export default App;
