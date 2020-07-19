import React from "react";
import { connect } from "react-redux";
import { PageHeader, Button } from "antd";

import { ALL, ACTIVE, COMPLETED } from "../../store/constants/filterConstants";

import "./AppHeader.css";
import "antd/dist/antd.css";

const AppHeader = ({ amountOfTasks, activeBtn, onClick }: AppHeaderTypes) => {
  return (
    <PageHeader
      className="header"
      title="ToDo list"
      subTitle={`You have ${amountOfTasks} tasks`}
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

interface AppHeaderTypes {
  amountOfTasks: number;
  activeBtn: string;
  onClick: (filterValue: string) => {};
}

export default connect()(AppHeader);
