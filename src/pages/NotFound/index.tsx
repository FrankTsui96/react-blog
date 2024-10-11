/**
 * Not Found
 */

import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Result } from "antd";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，页面不存在"
      extra={
        <Button type="primary" onClick={handleBack}>
          回到首页
        </Button>
      }
    />
  );
};

export default NotFound;
