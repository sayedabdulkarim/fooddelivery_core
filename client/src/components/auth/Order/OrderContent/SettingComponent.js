import React from "react";

import { Switch } from "antd";

const Setting = () => {
  return (
    <div className="_1stFr setting_component">
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
              <Switch className="custom_setting_switch" />
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
