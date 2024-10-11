/**
 * 页面头部菜单
 */

// Main
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

// Components
import { Menu } from "antd";
import type { MenuProps } from "antd";

type ItemsType = NonNullable<MenuProps["items"]>;

const Navigation: React.FC = () => {
  const items: ItemsType = [
    {
      key: "/",
      label: <NavLink to={"/"}>主页</NavLink>,
    },
    {
      key: "/tech",
      label: <NavLink to={"/tech"}>技术</NavLink>,
    },
    {
      key: "/sight",
      label: <NavLink to={"/sight"}>视线</NavLink>,
    },
    {
      key: "/share",
      label: <NavLink to={"/share"}>分享</NavLink>,
    },
  ];

  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={items}
      className={styles["layout-menu"]}
    />
  );
};

export default Navigation;
