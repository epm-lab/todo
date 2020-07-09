import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "./../../store/actions";
import "antd/dist/antd.css";
import { PageHeader, Button } from "antd";
import { ALL, ACTIVE, COMPLETED } from "./../../store/filterConstants";
import "./appHeader.css";

export const AppHeader = ({ amountOfTasks, activeFilter }: AppHeaderTypes) => {
  const dispatch = useDispatch();
  return (
    <PageHeader
      className="header"
      title="ToDo list"
      subTitle={`You have ${amountOfTasks} tasks`}
      extra={[
        <Button autoFocus onClick={() => dispatch(changeFilter(ALL))} key="3">
          All
        </Button>,
        <Button onClick={() => dispatch(changeFilter(ACTIVE))} key="2">
          Active
        </Button>,
        <Button onClick={() => dispatch(changeFilter(COMPLETED))} key="1">
          Complited
        </Button>,
      ]}
    />
  );
};

interface AppHeaderTypes {
  amountOfTasks: number;
  activeFilter: string;
}
