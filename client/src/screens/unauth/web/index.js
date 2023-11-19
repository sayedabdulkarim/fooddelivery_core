import React from "react";

const Index = () => {
  return (
    <div className="unauth_wrapper">
      {/* banner_section_start */}

      <div className="banner_section">
        <div className="left_section">
          {/* icon_sec */}
          <div className="icon_section">
            <img
              alt="product_logo"
              src="https://res.cloudinary.com/cnq-first/image/upload/v1700382183/image_11_1_ztsob7.png"
            />

            <div className="button_container">
              <button className="x4bK8">Login</button>
              <button>Sign up</button>
            </div>
          </div>

          <div className="title_section"></div>
          <div className="input_section"></div>
          <div className="popular_cities_section"></div>
        </div>
        <div className="right_section"></div>
      </div>

      {/* banner_section_start */}
    </div>
  );
};

export default Index;
