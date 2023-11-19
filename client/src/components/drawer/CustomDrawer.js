import React from "react";
import { Drawer } from "antd";

const CustomDrawerComponent = ({ open, onClose, children }) => {
  return (
    <Drawer
      title=""
      placement="right"
      onClose={onClose}
      open={open}
      className="custom_drawer"
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawerComponent;
