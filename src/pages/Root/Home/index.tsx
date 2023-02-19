/**
 * 主页
 */

// Main
import React from "react";
import styles from "./index.module.scss";
import { Col, Row } from "antd";
// Components

const Home: React.FC = () => {
  return (
    <div className={styles["home"]}>
      <Row className={styles["home-content"]} gutter={24}>
        <Col span={4}></Col>
        <Col span={20}>
          <div className={styles["home-article"]}>
            黑夜已深，白昼将近。我们就当脱去暗昧的行为，带上光明的兵器。
            <br />
            行事为人要端正，好像行在白昼。
            <br />
            不可荒宴醉酒。不可好色邪荡。不可争竞嫉妒。
            <br />
            总要披戴主耶稣基督，不要为肉体安排，去放纵私欲。
          </div>
          <div className={styles["home-description"]}>罗马书 13:12 - 13.14</div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
