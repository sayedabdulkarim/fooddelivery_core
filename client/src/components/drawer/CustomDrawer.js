import React from "react";
import { Drawer } from "antd";

const CustomDrawerComponent = ({
  open,
  onClose,
  placement,
  width,
  children,
}) => {
  return (
    <Drawer
      title=""
      placement={placement}
      onClose={onClose}
      open={open}
      width={width}
      className="custom_drawer"
    >
      {children}
    </Drawer>
  );
};

// export { CustomDrawerComponent };
export default CustomDrawerComponent;
