import React from "react";
import { AuthInfoIcon, AuthUnderline, ProductIcon } from "../../utils/svgs";

const Index = () => {
  return (
    <div className=" unauth_wrapper">
      {/*  */}
      <div className="content_container">
        {/* left */}
        <div className="left_section">
          <ProductIcon />
          <div className="title">PARTNER WITH SWIGGY!</div>
          <AuthUnderline />
          <div className="support_text">Access to Swiggy tools and support</div>
          <div className="active_text_line">
            <div className="text_line"></div>
            <div className="text_line"></div>
            <div className="text_line isActive"></div>
          </div>
        </div>
        {/* right */}
        <div className="css-175oi2r r-14lw9ot r-y47klf r-15d164r r-1n0xq6e r-zso239 r-156q2ks r-mon89y right_section">
          <div className="css-175oi2r r-14lw9ot r-y47klf r-1777fci r-k8qxaj r-1rdqkhd r-1hcxpru r-1knelpx right_section_container">
            {/*  */}
            <div className="title_section">Get Started</div>
            {/*  */}
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
                    value="12"
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
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Index;
