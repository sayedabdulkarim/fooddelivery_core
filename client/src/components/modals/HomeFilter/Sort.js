import React from "react";
import { CheckedInputRadio } from "../../../utils/svgs";

const Sort = () => {
  return (
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
  );
};

export default Sort;
