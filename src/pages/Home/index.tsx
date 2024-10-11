/**
 * 主页
 */

// Main
import React, { useState } from "react";
import styles from "./index.module.scss";

// Components
import { Button, Card, Col, Row } from "antd";
import PropTypes from "prop-types";

const Home: React.FC = () => {
  return (
    <div>
      <Row gutter={[24, 0]}>
        <Col span={18}>
          <Card>
            <div>最新内容</div>
          </Card>
        </Col>
        <Col span={6}>
          <Row gutter={[0, 24]}>
            <Col span={24}>
              <Card>
                <div className={styles["home-article"]}>
                  黑夜已深，白昼将近。我们就当脱去暗昧的行为，带上光明的兵器。
                  <br />
                  行事为人要端正，好像行在白昼。
                  <br />
                  不可荒宴醉酒。不可好色邪荡。不可争竞嫉妒。
                  <br />
                  总要披戴主耶稣基督，不要为肉体安排，去放纵私欲。
                </div>
                <div>罗马书 13:12 - 13.14</div>
              </Card>
            </Col>
            <Col span={24}>
              <Card>
                <div>FrankTsui96</div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

Home.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};

export default Home;
