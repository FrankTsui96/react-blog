/**
 * 页面头部菜单
 */

// Main
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

// Components
import { Menu } from "antd";
import type { ItemType } from "antd/es/menu/hooks/useItems";

const Navigation: React.FC = () => {
  const items: ItemType[] = [
    {
      key: "/",
      label: <NavLink to={"/"}>主页</NavLink>,
    },
    {
      key: "/tech",
      label: "技术",
      children: [
        {
          key: "2-1",
          label: <NavLink to={"/tech"}>CS</NavLink>,
        },
        {
          key: "2-2",
          label: <NavLink to={"/tech"}>别的</NavLink>,
        },
      ],
    },
    {
      key: "/sight",
      label: "视线",
      children: [
        {
          key: "3-1",
          label: <NavLink to={"/sight"}>第一辑</NavLink>,
        },
        {
          key: "3-2",
          label: <NavLink to={"/sight"}>第二辑</NavLink>,
        },
      ],
    },
    {
      key: "/share",
      label: "分享",
      children: [
        {
          key: "4-1",
          label: <NavLink to={"/share"}>读书</NavLink>,
        },
        {
          key: "4-2",
          label: <NavLink to={"/share"}>电影</NavLink>,
        },
        {
          key: "4-3",
          label: <NavLink to={"/share"}>音乐</NavLink>,
        },
        {
          key: "4-4",
          label: <NavLink to={"/share"}>游戏</NavLink>,
        },
      ],
    },
    {
      key: "/more",
      label: "更多",
      children: [
        {
          key: "5-1",
          label: <NavLink to={"/more"}>Follow</NavLink>,
        },
      ],
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
