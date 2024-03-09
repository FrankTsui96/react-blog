/**
 * 主页
 */

// Main
import React, { useState } from "react";
import styles from "./index.module.scss";

// Components
import { Button, Card, Col, Row } from "antd";
import TweenOne from "rc-tween-one";
import SvgDrawPlugin from "rc-tween-one/lib/plugin/SvgDrawPlugin";
import PropTypes from "prop-types";
TweenOne.plugins.push(SvgDrawPlugin);

const dataStartArr = ["30 150", "50% 50%", "30% 200", "20 30%", 0, "100%"];
let i = 0;

const Home: React.FC = () => {
  const [tweenData, setTweenData] =
    useState<(typeof dataStartArr)[number]>("100%");
  function onClick() {
    const tweenData = dataStartArr[i];
    setTweenData(tweenData);
    i++;
    i = i >= dataStartArr.length ? 0 : i;
  }
  return (
    <div className={styles["home"]}>
      <Card
        hoverable={true}
        className={styles["home-content"]}
        actions={[<Button onClick={onClick}>JUMP!</Button>]}
      >
        <Row gutter={24}>
          <Col span={2}>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <svg
                width="200"
                height="84"
                version="1.2"
                style={{ display: "block", margin: "auto" }}
              >
                <TweenOne
                  animation={{ SVGDraw: tweenData, duration: 1000 }}
                  style={{ fill: "none", strokeWidth: 10, stroke: "#019BF0" }}
                  component="path"
                  d="M0 0L0 100"
                />
              </svg>
            </div>
          </Col>
          <Col span={22}>
            <div className={styles["home-article"]}>
              黑夜已深，白昼将近。我们就当脱去暗昧的行为，带上光明的兵器。
              <br />
              行事为人要端正，好像行在白昼。
              <br />
              不可荒宴醉酒。不可好色邪荡。不可争竞嫉妒。
              <br />
              总要披戴主耶稣基督，不要为肉体安排，去放纵私欲。
            </div>
            <div className={styles["home-description"]}>
              罗马书 13:12 - 13.14
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

Home.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};

export default Home;
