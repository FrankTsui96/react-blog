/**
 * 主视图
 */

// Main
import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";

// Components
import { Layout, theme, Col, Row } from "antd";
import Navigation from "./components/Navigation/inedx";
const { Header, Content } = Layout;

const Root: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className={styles["root"]}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          background: colorBgContainer,
        }}
      >
        <Row justify="space-around">
          <Col span={4}></Col>
          <Col span={16}>
            <Navigation />
          </Col>
          <Col span={4}></Col>
        </Row>
      </Header>
      <Content
        className="site-layout"
        style={{
          position: "relative",
          padding: "50px",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
};

export default Root;
