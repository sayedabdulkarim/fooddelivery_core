import React, { useState } from "react";
import { Button, Modal } from "antd";
import {
  CheckedInputRadio,
  UnCheckedInputRadio,
  CheckedInput,
  UnCheckedInput,
} from "../../utils/svgs";

import { homePageFilterOptionsObj } from "../../utils/constant";

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
                {Object.keys(homePageFilterOptionsObj).map((o) => {
                  return (
                    <li className="sc-YysOf eGsoBa" key={o}>
                      <div className="item-wrapper">
                        <div className="sc-aXZVg cbGKQI">{o}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {/* right */}
              <div className="content">
                <div className="sc-aXZVg jxDVMd">
                  <div className="sc-eulNck gNHAci">
                    <div className="sc-aXZVg hMjUKj">Sort By</div>
                  </div>
                  <div className="sc-bXCLTC hcmGqD">
                    <div
                      label="Relevance (Default)"
                      orientation="ltr"
                      class="sc-hmdomO biZBXM"
                    >
                      <input
                        type="radio"
                        id="Sort-0"
                        name="Sort"
                        value="relevance"
                        checked=""
                      />
                      <span class="custom-checkbox">
                        <div>
                          <CheckedInputRadio />
                        </div>
                      </span>
                      <label for="Sort-0" class="sc-aXZVg MCNps">
                        Relevance (Default)
                      </label>
                    </div>
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
