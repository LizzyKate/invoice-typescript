import React, { useState } from "react";
import "./App.css";
import { Button, Card, ConfigProvider, Layout, theme, Breadcrumb } from "antd";
import { Routes, Route } from "react-router";
import SideBar from "./components/SideBar";
import "./App.css";
import Drop from "./components/Dropdown";
import Date from "./components/Date";

const { Header, Content, Footer } = Layout;

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar handleClick={handleClick} mode={isDarkMode} />
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Drop />
              <Date />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
