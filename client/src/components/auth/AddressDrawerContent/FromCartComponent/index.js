import React from "react";
import MapComponent from "./MapComponent";

const FromCartComponent = () => {
  return (
    <div>
      <MapComponent />
      {/* form */}
      <div className="jbXOs" style={{ marginTop: "100px" }}>
        <div>
          <div className="_3Um38 _23P1X">
            <input
              className="_381fS"
              type="text"
              name="building"
              id="building"
              tabindex="1"
              autocomplete="off"
              value=""
            />
            <div className="_2EeI1"></div>
            <label className="_1Cvlf" for="building">
              Door / Flat No.
            </label>
          </div>
        </div>
        <div>
          <div className="_3Um38 _23P1X">
            <input
              className="_381fS"
              type="text"
              name="landmark"
              id="landmark"
              tabindex="1"
              autocomplete="off"
              value=""
            />
            <div className="_2EeI1"></div>
            <label className="_1Cvlf" for="landmark">
              Landmark
            </label>
          </div>
        </div>
        <div className="_2i256">
          <div className="_1dzL9">
            <span className="_3Ey3V icon-home"></span>
            <div className="sf8jl">Home</div>
          </div>
          <div className="_1dzL9">
            <span className="_3Ey3V icon-work"></span>
            <div className="sf8jl">Work</div>
          </div>
          <div className="_1dzL9">
            <span className="_3Ey3V icon-location"></span>
            <div className="sf8jl">Other</div>
          </div>
          <div className="_1qe1S">
            <div className="_3Um38 _3vwW5">
              <input
                className="_381fS _1oTLG _2VYMY"
                type="text"
                name="annotation"
                id="annotation"
                tabindex="1"
                placeholder="Dad’s home, my man cave"
                maxlength="20"
                value=""
              />
              <div className="_2EeI1 _26LFr"></div>
              <label className="_1Cvlf _2tL9P" for="annotation"></label>
            </div>
          </div>
        </div>
      </div>
      {/* button */}
      <div className="gbzB0">
        <div className="_25qBi">
          <a className="_2sd1x">SAVE ADDRESS &amp; PROCEED</a>
        </div>
      </div>
    </div>
  );
};

export default FromCartComponent;