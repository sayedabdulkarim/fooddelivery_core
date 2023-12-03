import React from "react";
import { Drawer } from "antd";

const CustomDrawerComponent = ({ open, onClose, placement, children }) => {
  return (
    <Drawer
      title=""
      placement={placement}
      onClose={onClose}
      open={open}
      className="custom_drawer"
    >
      {children}
    </Drawer>
  );
};

// export { CustomDrawerComponent };
export default CustomDrawerComponent;
