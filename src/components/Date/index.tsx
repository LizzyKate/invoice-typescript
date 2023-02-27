import React from "react";
import type { DatePickerProps } from "antd";
import { Space } from "antd";
import * as S from "./style";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const Date: React.FC = () => (
  <Space direction="vertical">
    <S.Label>Issue Date</S.Label>
    <S.DatePicker size="middle" onChange={onChange} />
  </Space>
);

export default Date;
