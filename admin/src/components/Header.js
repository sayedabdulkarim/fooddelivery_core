import React from "react";
import { Layout, Menu, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div style={{ color: "white", fontSize: "20px" }}>
          <img
            src="/path-to-your-logo.png"
            alt="Logo"
            style={{ height: "30px" }}
          />{" "}
          Logo
        </div>

        {/* Profile Icon */}
        <div>
          <Avatar size="large" icon={<UserOutlined />} />
        </div>
      </Header>
    </Layout>
  );
};

export default AppHeader;
