import React from "react";
import "antd/dist/antd.css";
import { PageHeader, Button } from "antd";

import "./appHeader.css";

export const AppHeader = ({ amountOfTasks }: AppHeaderTypes) => {
  return (
    <PageHeader
      className="header"
      title="ToDo list"
      subTitle={`You have ${amountOfTasks} tasks`}
      extra={[
        <Button key="3">All</Button>,
        <Button key="2">Active</Button>,
        <Button key="1">Complited</Button>,
      ]}
    />
  );
};

interface AppHeaderTypes {
  amountOfTasks: number;
}
