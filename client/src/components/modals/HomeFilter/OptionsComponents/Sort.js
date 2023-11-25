import React from "react";
import { CheckedInputRadio, UnCheckedInputRadio } from "../../../../utils/svgs";

const Sort = ({
  homePageFilterOptionsObj,
  isActiveOption,
  handleFilterChange,
  filters,
}) => {
  const { sort } = filters;
  return (
    <div className="sc-aXZVg jxDVMd">
      <div className="sc-eulNck gNHAci">
        <div
          className="sc-aXZVg hMjUKj"
          onClick={() => console.log({ homePageFilterOptionsObj, filters })}
        >
          Sort By
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
              style={{
                padding: "10px 0",
              }}
              onClick={() => handleFilterChange("sort", item)}
            >
              <span className="custom-checkbox">
                <div>
                  {sort === item ? (
                    <CheckedInputRadio />
                  ) : (
                    <UnCheckedInputRadio />
                  )}
                  {/* <CheckedInputRadio /> */}
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

export default Sort;
