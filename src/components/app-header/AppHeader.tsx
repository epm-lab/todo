import React from "react";
import { PageHeader, Button } from "antd";

import { ALL, ACTIVE, COMPLETED } from "../../store/constants/filterConstants";
import { AppHeaderTypes } from "./../../utils/interfaces";

import "./AppHeader.css";
import "antd/dist/antd.css";

export const AppHeader = ({
  amountOfTasks,
  activeBtn,
  onClick,
}: AppHeaderTypes) => {
  return (
    <PageHeader
      className="header"
      title="ToDo list"
      subTitle={
        amountOfTasks > 1
          ? `You have ${amountOfTasks} tasks`
          : `You have ${amountOfTasks} task`
      }
      extra={[
        <Button
          className="button-filter"
          onClick={() => onClick(ALL)}
          type={ALL === activeBtn ? "primary" : "default"}
          key="3"
        >
          All
        </Button>,
        <Button
          className="button-filter"
          onClick={() => onClick(ACTIVE)}
          type={ACTIVE === activeBtn ? "primary" : "default"}
          key="2"
        >
          Active
        </Button>,
        <Button
          className="button-filter"
          onClick={() => onClick(COMPLETED)}
          type={COMPLETED === activeBtn ? "primary" : "default"}
          key="1"
        >
          Done
        </Button>,
      ]}
    />
  );
};
