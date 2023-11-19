import React from "react";
//component
import DeliverInputField from "../../../components/unAuth/DeliverInputFieldSection";
import PopularCities from "../../../components/unAuth/PopularCitiesSection";
//hooks
import { useTextCycle } from "../../../hooks/useTextCycle";
import ServiceHighlights from "../../../components/unAuth/ServiceHighlightsSection";
import AppDownloadSection from "../../../components/unAuth/AppDownloadSection";

const Index = () => {
  const texts = ["Hungry?", "Unexpected guests?", "Cooking gone wrong?"];
  const currentText = useTextCycle(texts, 3000); // 1000ms = 1 second

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
            {/* button_sec */}
            <div className="button_container">
              <button className="x4bK8">Login</button>
              <button className="r2iyh">Sign up</button>
            </div>
          </div>
          {/* text_animate */}
          <div className="text_animation_section">
            <h1 className="sZsUd changedText">{currentText}</h1>
            <h2 className="_1E3AJ">
              Order food from favourite restaurants near you.
            </h2>
          </div>
          {/* deliver input sec */}
          <div className="input_section">
            <DeliverInputField />
          </div>
          {/* popular cities sec sec */}
          <div className="popular_cities_section">
            <PopularCities />
          </div>
        </div>
        <div className="right_section"></div>
      </div>

      {/* ServiceHighlights section  */}

      <ServiceHighlights />

      {/* AppDownloadSection */}
      <AppDownloadSection />
    </div>
  );
};

export default Index;
