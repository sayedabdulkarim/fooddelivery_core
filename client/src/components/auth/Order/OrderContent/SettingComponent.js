import React from "react";

const Setting = () => {
  return (
    <div className="_1stFr">
      <div>
        <h1 className="_1jOCX">SMS Preferences</h1>
        <div className="wrLIm">
          <div className="_1zQnh">
            Order related SMS cannot be disabled as they are critical to provide
            service
          </div>
          <div className="_2OV-J">
            <div className="_3IHEY">Recommendations &amp; Reminders</div>
            <div className="_16vv_">
              <button
                data-testid="toggle-switch"
                role="switch"
                aria-checked="false"
              >
                <span className="ToggleSwitch_toggleBar__1peIy RoundedToggleSwitch_roundToggleBar__28j_f">
                  <span className="ToggleSwitch_toggleThumb__NBLuA RoundedToggleSwitch_roundToggleThumb__3iOrp ToggleSwitch_toggleThumbActive__3hBTE">
                    <span className="ToggleSwitch_toggleThumbContent__33ZU6"></span>
                  </span>
                </span>
              </button>
            </div>
            <div className="_2Vb4D"></div>
            <div className="_27pFI">
              Keep this on to receive offer recommendations &amp; timely
              reminders based on your interests
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
