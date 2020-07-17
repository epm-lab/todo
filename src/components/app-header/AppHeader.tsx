import React from "react";
import { connect } from "react-redux";
import { changeFilter } from "../../store/actions";
import { ALL, ACTIVE, COMPLETED } from "../../store/filterConstants";
import { PageHeader, Button } from "antd";

import "./AppHeader.css";
import "antd/dist/antd.css";

const AppHeader = ({ amountOfTasks, activeBtn, dispatch }: AppHeaderTypes) => {
  return (
    <PageHeader
      className="header"
      title="ToDo list"
      subTitle={`You have ${amountOfTasks} tasks`}
      extra={[
        <Button
          className="button-filter"
          onClick={() => dispatch(changeFilter(ALL))}
          type={ALL === activeBtn ? "primary" : "default"}
          key="3"
        >
          All
        </Button>,
        <Button
          className="button-filter"
          onClick={() => dispatch(changeFilter(ACTIVE))}
          type={ACTIVE === activeBtn ? "primary" : "default"}
          key="2"
        >
          Active
        </Button>,
        <Button
          className="button-filter"
          onClick={() => dispatch(changeFilter(COMPLETED))}
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
  dispatch: any;
}

export default connect()(AppHeader);
