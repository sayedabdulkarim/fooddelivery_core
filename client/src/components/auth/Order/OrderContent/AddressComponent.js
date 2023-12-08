import React from "react";

const Address = ({ savedAddress }) => {
  return (
    <div className="_1stFr address_component">
      <div className="address_component_container">
        <div className="ZMdmv title">Manage Addresses</div>

        <div className="_2xL-J address_container_items">
          {savedAddress?.addresses?.map((item) => {
            const { _id, address, type } = item;
            return (
              <div
                key={_id}
                className="_2-CaT item"
                onClick={() => console.log(item, " iiiiiiiii")}
              >
                <div className="Pydh7 item_icon">
                  <span
                    className={`${type === "Home" ? "icon-home" : "icon-work"}`}
                  ></span>
                </div>
                <div className="item_desc">
                  <div className="_3M0On type">{type}</div>
                  <div className="_1rPE3 address">{address}</div>
                  <div className="_2o0z3 btn_container">
                    <span>EDIT</span>
                    <span>DELETE</span>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="_2-CaT" style={{ display: "none" }}>
            <div className="Pydh7">
              <span className="icon-work"></span>
            </div>
            <div>
              <div className="_3M0On">Work</div>
              <div className="_1rPE3">
                ground floor, Kudlu, Bengaluru, Karnataka 560068, India.
                (Singasandra)
              </div>
              <div className="_2o0z3">
                <span>EDIT</span>
                <span>DELETE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
