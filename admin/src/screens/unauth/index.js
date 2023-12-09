import React from "react";
import { AuthInfoIcon, AuthUnderline, ProductIcon } from "../../utils/svgs";
import LoginComponent from "./Login";

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
            <LoginComponent />
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Index;
