import React from "react";
import { CheckedInput, UnCheckedInput } from "../../../../utils/svgs";

const Offers = ({ homePageFilterOptionsObj, isActiveOption }) => {
  return (
    <div className="sc-aXZVg jxDVMd">
      <div className="sc-eulNck gNHAci">
        <div
          className="sc-aXZVg hMjUKj"
          onClick={() =>
            console.log(homePageFilterOptionsObj, " homePageFilterOptionsObj")
          }
        >
          Restaurants With
        </div>
      </div>
      <div className="sc-bXCLTC hcmGqD">
        {homePageFilterOptionsObj[isActiveOption]?.map((item) => {
          return (
            <div
              label="Relevance (Default)"
              orientation="ltr"
              className="sc-hmdomO biZBXM"
              key={item}
            >
              <input
                type="radio"
                id="Sort-0"
                name={item}
                value={item}
                checked=""
              />
              <span class="custom-checkbox">
                <div>
                  <CheckedInput />
                  {/* <UnCheckedInputRadio /> */}
                </div>
              </span>
              <label htmlFor="Sort-0" className="sc-aXZVg MCNps">
                {item}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offers;
