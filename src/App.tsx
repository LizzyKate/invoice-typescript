import React, { useState } from "react";
import "./App.css";
import { ConfigProvider, Layout, theme } from "antd";
import { Routes, Route } from "react-router";
import SideBar from "./components/SideBar";
import "./App.css";
import Invoices from "./pages";

const { Content } = Layout;

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
        {isDarkMode ? (
          <Layout
            className="site-layout"
            style={{ maxHeight: "100vh", background: "#141625" }}
          >
            <Content>
              <Routes>
                <Route path="/" element={<Invoices mode={isDarkMode} />} />
              </Routes>
            </Content>
          </Layout>
        ) : (
          <Layout
            className="site-layout"
            style={{ maxHeight: "100vh", background: "#F2F2F2" }}
          >
            <Content>
              <Routes>
                <Route path="/" element={<Invoices mode={isDarkMode} />} />
              </Routes>
            </Content>
          </Layout>
        )}
      </Layout>
    </ConfigProvider>
  );
}

export default App;
