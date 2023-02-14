import React, { useState } from "react";
import "./App.css";
import { ConfigProvider, Layout, theme, Breadcrumb } from "antd";
import { Routes, Route } from "react-router";
import SideBar from "./components/SideBar";
import "./App.css";
import Drop from "./components/Dropdown";
import Date from "./components/Date";
import { SelectValue } from "./components/Select";
import { Button } from "./components/Button ";
import { Input } from "./components/Input";

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
              {/* <SelectValue
                getValue={() => {}}
                options={[
                  { label: "hey", value: "1" },
                  { label: "hey", value: "2" },
                ]}
              />
              <Button
                handleClick={() => {}}
                icon={false}
                backgroundColor={"red"}
                disabled={false}
                color={"blue"}
                width={"100px"}
                add={false}
                children={"hey"}
              />
              <Input getValue={() => {}} type="text" /> */}
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
