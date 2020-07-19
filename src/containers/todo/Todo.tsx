import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

import { RootState, Task } from "../../store/appState";
import {
  addTask,
  changeFilter,
  completeTask,
  removeTask,
} from "../../store/actions";
import AppHeader from "../../components/app-header/AppHeader";
import { COMPLETED, ACTIVE } from "../../store/constants/filterConstants";
import { TodoList } from "../../components/todo-list/TodoList";
import { minLengthCreator, maxLengthCreator } from "./../../utils/validators";
import { Input } from "./../../components/custom-input/CustomInput";

import "antd/dist/antd.css";
import "./Todo.css";

//React.Component<InjectedFormProps<IUser, IProps> & IProps>
//:React.Component<CustomProps & InjectedFormProps<{}, CustomProps>>

const minLength2 = minLengthCreator(2);
const maxLength25 = maxLengthCreator(25);

const ToDoContainer = ({
  handleSubmit,
  pristine,
  submitting,
  filter,
  tasks,
  onFilterClick,
  onAddTask,
  onComplete,
  onRemove,
}: any): ReactElement => {
  const isTasksExist = tasks && tasks.length > 0;

  const handleAddTask = (values: any) => {
    const taskText: string = values.toDoInput;
    if (taskText && taskText.length > 0) {
      const newTask: Task = {
        id: new Date().getTime(),
        text: taskText,
        isCompleted: false,
      };
      values.toDoInput = "";
      console.log(newTask);
      onAddTask(newTask);
    }
  };

  const filterTasks = (tasks: Task[], activeFilter: string) => {
    switch (activeFilter) {
      case COMPLETED:
        return tasks.filter((task) => task.isCompleted);
      case ACTIVE:
        return tasks.filter((task) => !task.isCompleted);
      default:
        return tasks;
    }
  };

  const filteredTasks = filterTasks(tasks, filter);

  return (
    <>
      <AppHeader
        amountOfTasks={tasks.length}
        activeBtn={filter}
        onClick={onFilterClick}
      />
      <form className="form-add" onSubmit={handleSubmit(handleAddTask)}>
        <div className="main">
          <Field
            className="main-input ant-input"
            name="toDoInput"
            component={Input}
            type="text"
            placeholder="Enter your new task here..."
            validate={[minLength2, maxLength25]}
          />
          <button
            id="btn-add"
            className="button-add ant-btn ant-btn-primary"
            type="submit"
            disabled={pristine || submitting}
          >
            Add
          </button>
        </div>
        {isTasksExist && (
          <TodoList
            tasksList={filteredTasks}
            onRemove={onRemove}
            onComplete={onComplete}
          />
        )}
      </form>
    </>
  );
};

const formCreator = reduxForm({
  form: "toDo",
  touchOnChange: true,
});

const connector = connect(
  (state: RootState) => ({
    tasks: state.tasks,
    filter: state.filter,
  }),
  (dispatch) => ({
    onAddTask: (newTask: Task) => dispatch(addTask(newTask)),
    onFilterClick: (selectedFilter: string) =>
      dispatch(changeFilter(selectedFilter)),
    onComplete: (id: number) => dispatch(completeTask(id)),
    onRemove: (id: number) => dispatch(removeTask(id)),
  })
);

export const ToDo = connector(formCreator(ToDoContainer));
