import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import * as S from "./style";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const Date: React.FC = () => (
  <Space direction="vertical" style={{ width: "100%" }}>
    <S.Label>Issue Date</S.Label>
    <DatePicker size="middle" onChange={onChange} style={{ width: "100%" }} />
  </Space>
);

export default Date;
