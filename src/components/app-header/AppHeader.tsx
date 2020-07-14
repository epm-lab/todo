import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../store/actions";
import { ALL, ACTIVE, COMPLETED } from "../../store/filterConstants";
import { PageHeader, Button } from "antd";

import "./AppHeader.css";
import "antd/dist/antd.css";

export const AppHeader = ({ amountOfTasks, activeBtn }: AppHeaderTypes) => {
  const dispatch = useDispatch();
  return (
    <PageHeader
      className="header"
      title="ToDo list"
      subTitle={`You have ${amountOfTasks} tasks`}
      extra={[
        <Button
          onClick={() => dispatch(changeFilter(ALL))}
          className={ALL === activeBtn ? "active" : ""}
          key="3"
        >
          All
        </Button>,
        <Button
          onClick={() => dispatch(changeFilter(ACTIVE))}
          className={ACTIVE === activeBtn ? "active" : ""}
          key="2"
        >
          Active
        </Button>,
        <Button
          onClick={() => dispatch(changeFilter(COMPLETED))}
          className={COMPLETED === activeBtn ? "active" : ""}
          key="1"
        >
          Completed
        </Button>,
      ]}
    />
  );
};

interface AppHeaderTypes {
  amountOfTasks: number;
  activeBtn: string;
}
