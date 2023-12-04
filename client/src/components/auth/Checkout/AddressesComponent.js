import React from "react";

const AddressesComponent = ({ getAddressData }) => {
  const { addresses } = getAddressData;
  return (
    <div className="_3djal">
      <div>
        <div className="_1rwo5 ">
          <div className="F8Sye">
            <div
              className="_2YrH-"
              onClick={() =>
                console.log(getAddressData, " getAddressDatagetAddressData")
              }
            >
              Choose a delivery address
            </div>
          </div>
          {/*  */}
          <div>
            <span className="_38EYL">Multiple addresses in this location</span>
            <div className="-brc1">
              {addresses?.map((item) => {
                const {
                  location,
                  _id,
                  user,
                  address,
                  doorNumber,
                  landmark,
                  type,
                } = item;
                return (
                  <div className="_2nd--" key={_id}>
                    <div className="_3p8Mf">
                      <div className="WtfuC">
                        {/* <span className="icon-home"></span> */}
                        <span
                          className={
                            type === "Home" ? "icon-home" : "icon-work"
                          }
                        ></span>
                      </div>
                      <div>
                        <div className="_2xgU6">{type}</div>
                        <div className="KYAcN">{address}</div>
                        <div className="_3w1k-">23 MINS - ***</div>
                        <div className="_3dNWs">Deliver Here</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/*  */}
          <div style={{ display: "none" }}>
            <span className="_38EYL">Multiple addresses in this location</span>
            <div className="-brc1">
              <div className="_2nd--">
                <div className="_3p8Mf">
                  <div className="WtfuC">
                    <span className="icon-home"></span>
                  </div>
                  <div>
                    <div className="_2xgU6">home</div>
                    <div className="KYAcN">
                      Elite Homes, 2nd floor, 10th Cross, 9th Main, HBR layout,
                      Hennur Gardens, Bengaluru, Karnataka 560043, India
                    </div>
                    <div className="_3w1k-">23 MINS</div>
                    <div className="_3dNWs">Deliver Here</div>
                  </div>
                </div>
              </div>
              <div className="_2nd--">
                <div className="_3p8Mf">
                  <div className="WtfuC _3mJDe">
                    <span className="icon-location"></span>
                  </div>
                  <div>
                    <div className="_2xgU6">Other</div>
                    <div className="KYAcN">
                      Looks studio, # 10/5, 1st main, Koramangala, KHB Colony,
                      5th Block, Koramangala, Bengaluru, Karnataka 560034, India
                    </div>
                    <div className="_3w1k-">67 MINS</div>
                    <div className="_3dNWs">Deliver Here</div>
                  </div>
                </div>
              </div>

              <div className="_2nd--">
                <div className="_3p8Mf Ldi91">
                  <div className="WtfuC _3mJDe">
                    <div className="icon-location"></div>
                    <div className="_2_VIS">+</div>
                  </div>
                  <div>
                    <div className="_2xgU6">Add new Address</div>
                    <div className="KYAcN">
                      2nd floor, 10th Cross, 9th Main, HBR layout, Hennur
                      Gardens, Bengaluru, Karnataka 560043, India
                    </div>
                    <div className="_3dNWs _1AS3P">Add New</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="_250uQ _26MRf"></div>
          <div className="_2b4pY">
            <span className="_1q8J4 icon-marker-checkout"></span>
          </div>
        </div>
        <div>
          <div className="_1rwo5">
            <div className="F8Sye _1rtRz">
              <div className="_2YrH-">Payment</div>
            </div>
            <div className="_2b4pY AuX5b">
              <span className="_1q8J4 _1UwKN icon-wallet-checkout"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressesComponent;
