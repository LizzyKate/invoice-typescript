import { Row, Col, Typography } from "antd";
import React from "react";
import Drop from "../components/Dropdown";
import { Button } from "../components/Button ";

const { Title, Text } = Typography;
interface Props {
  mode: boolean;
}

const Invoices: React.FC<Props> = ({ mode }) => {
  return (
    <>
      {mode ? (
        <>
          <h1 style={{ color: "black" }}>Invoice</h1>
        </>
      ) : (
        <>
          <Row
            justify="space-between"
            align="middle"
            style={{ width: "60%", margin: "32px auto 0 auto" }}
          >
            <Row
              justify="space-between"
              align="middle"
              style={{ width: "100%" }}
            >
              <Col>
                <Title
                  level={2}
                  style={{ color: "#0c0e16", marginBottom: "0" }}
                >
                  Invoices
                </Title>
                <Text
                  style={{
                    marginBottom: "0",
                    color: "#888EB0",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  There are 0 Invoices
                </Text>
              </Col>
              <Row align="middle">
                <Col style={{ marginRight: "50px" }}>
                  <Drop />
                </Col>
                <Col>
                  <Button
                    icon={true}
                    children="New Invoice"
                    onClick={() => {
                      console.log("click");
                    }}
                    color="#ffffff"
                    backgroundcolor="#7C5DFA"
                    disabled={false}
                    hoverbackgroundcolor="#9277FF"
                  />
                </Col>
              </Row>
            </Row>
          </Row>
        </>
      )}
    </>
  );
};

export default Invoices;
