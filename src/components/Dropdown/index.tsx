import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, message, Space, Checkbox } from "antd";
import * as S from "./style";

const Drop: React.FC = () => {
  const [checked, setChecked] = useState<string | undefined>(undefined);

  const onClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`${key}`);
    setChecked(key);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Space>
          <Checkbox
            style={{ color: "#7C5DFA", fontSize: "16px" }}
            checked={checked === "Draft"}
            onClick={() => setChecked("Draft")}
          />
          <span>Draft</span>
        </Space>
      ),
      key: "Draft",
    },
    {
      label: (
        <Space>
          <Checkbox
            style={{ color: "#7C5DFA", fontSize: "16px" }}
            checked={checked === "Pending"}
            onClick={() => setChecked("Pending")}
          />
          <span>Pending</span>
        </Space>
      ),
      key: "Pending",
    },
    {
      label: (
        <Space>
          <Checkbox
            style={{ color: "#7C5DFA", fontSize: "16px" }}
            checked={checked === "Paid"}
            onClick={() => setChecked("Paid")}
          />
          <span>Paid</span>
        </Space>
      ),
      key: "Paid",
    },
  ];

  return (
    <Dropdown
      menu={{ items, onClick }}
      dropdownRender={(menu) => (
        <div>
          {menu}
          <S.Drop
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onClick}
          ></S.Drop>
        </div>
      )}
    >
      <button onClick={(e) => e.preventDefault()}>
        <Space>
          <S.title>Filter by status</S.title>
          <DownOutlined
            size={1}
            style={{ fontSize: "10px", color: "#7C5DFA" }}
          />
        </Space>
      </button>
    </Dropdown>
  );
};

export default Drop;
