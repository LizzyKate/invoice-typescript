import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, message, Space } from "antd";
import * as S from "./style";

const onClick: MenuProps["onClick"] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const Drop: React.FC = () => (
  <Dropdown menu={{ items, onClick }}>
    <button onClick={(e) => e.preventDefault()}>
      <Space>
        <S.title>Filter by status</S.title>
        <DownOutlined size={1} style={{ fontSize: "10px", color: "#7C5DFA" }} />
      </Space>
    </button>
  </Dropdown>
);

export default Drop;
