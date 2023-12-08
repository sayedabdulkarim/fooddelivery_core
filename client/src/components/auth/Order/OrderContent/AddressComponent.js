import React from "react";

const Address = ({ savedAddress }) => {
  return (
    <div className="_1stFr address_component">
      <div>
        <div>
          <div className="ZMdmv">Manage Addresses</div>
          <div className="_2xL-J">
            {savedAddress?.addresses?.map((item) => {
              const { _id, address, type } = item;
              return (
                <div
                  key={_id}
                  className="_2-CaT"
                  onClick={() => console.log(item, " iiiiiiiii")}
                >
                  <div className="Pydh7">
                    <span
                      className={`${
                        type === "Home" ? "icon-home" : "icon-work"
                      }`}
                    ></span>
                  </div>
                  <div>
                    <div className="_3M0On">{type}</div>
                    <div className="_1rPE3">{address}</div>
                    <div className="_2o0z3">
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
    </div>
  );
};

export default Address;
