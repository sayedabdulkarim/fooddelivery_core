import React from "react";
import { AuthInfoIcon } from "../../utils/svgs";

const Login = () => {
  return (
    <div className="form_container">
      {/*  */}
      <div className="title_container">
        <div className="info_text">
          Enter a mobile number or restaurant ID to continue
        </div>
        <div className="info_icon">
          <AuthInfoIcon />
        </div>
      </div>
      {/*  */}
      <form>
        {/* input */}
        <div className="css-175oi2r input_item">
          <input
            maxLength="10"
            placeholder="Enter Restaurant ID / Mobile number"
            autoCapitalize="sentences"
            autoComplete="on"
            autoCorrect="on"
            inputMode="decimal"
            spellCheck="true"
            className="css-11aywtz r-6taxm2"
            value=""
          />
        </div>
        {/* button */}
        <div className="css-175oi2r r-1awozwy r-1f0042m r-195d4m8 r-1777fci r-1u916t5 r-633pao submit_button">
          <div className="css-1rynq56 r-1dt6c6u r-1i10wst r-hbpseb r-q4m81j r-ndvcnb r-jwli3a r-lrvibr btn_text">
            Continue
          </div>
        </div>
        {/*  */}
      </form>
    </div>
  );
};

export default Login;
