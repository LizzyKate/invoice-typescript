import React from "react";
import { Layout } from "antd";
import logo from "../assets/images/logo.svg";
import moon from "../assets/images/moon.svg";
import profile from "../assets/images/profile.svg";
import sun from "../assets/images/sun.svg";

const { Sider } = Layout;

interface Props {
  handleClick: () => void;
  mode: boolean;
}

const SideBar: React.FC<Props> = ({ handleClick, mode }) => {
  return (
    <Sider width={80}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="__footer">
        <button className="__moon" onClick={handleClick}>
          {!mode ? <img src={moon} alt="" /> : <img src={sun} alt="" />}
        </button>
        <div className="__line"></div>
        <div className="__moon">
          <img src={profile} alt="" />
        </div>
      </div>
    </Sider>
  );
};

export default SideBar;
