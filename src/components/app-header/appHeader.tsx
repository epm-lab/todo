import React from "react";
import "antd/dist/antd.css";
import { PageHeader, Button } from "antd";

import "./appHeader.css";

export const AppHeader: React.FC = () => {
  return (
    <PageHeader
      className="header"
      title="ToDo list"
      subTitle="You have 0 tasks" //почитать про динамические значения
      extra={[
        <Button key="3">All</Button>,
        <Button key="2">Active</Button>,
        <Button key="1">Complited</Button>,
      ]}
    />
  );
};
