import Header from "@/shared/Header";
import { Email, Key } from "@/icons";
import React, { useState } from "react";
import Base from "@/template/base";
import { Space, Card, Avatar } from "antd";

const Signin = () => {
  const { Meta } = Card;
  return (
    <Base isNeedHelp hideFooter>
      <div className="p-4">
        <div className="container">
        <Space direction="vertical" size={16}>
            <h4>Referrals</h4>
        <Card style={{ width: 700, marginTop: 16 }} loading={true}>
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
              title="Card title"
              description="This is the description"
            />
        </Card>
        <Card style={{ width: 700, marginTop: 16 }} loading={true}>
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
              title="Card title"
              description="This is the description"
            />
        </Card>
        </Space>
        </div>
      </div>
    </Base>
  );
};

export default Signin;