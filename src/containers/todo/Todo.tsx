import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InjectedFormProps, reduxForm, Field } from "redux-form";
import { RootState, Task } from "../../store/appState";
import { addTask } from "../../store/actions";
import { AppHeader } from "../../components/app-header/AppHeader";
import { COMPLETED, ACTIVE } from "../../store/filterConstants";
import { TodoList } from "../../components/todo-list/TodoList";
import { PlusCircleOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import "./Todo.css";

const ToDo = (props: InjectedFormProps): ReactElement => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);
  const tasks = useSelector((state: RootState) => state.tasks);
  const isTasksExist = tasks && tasks.length > 0;
  const { handleSubmit, pristine, submitting } = props;

  const handleAddTask = (values: any) => {
    const taskText: string = values.toDoInput;
    if (taskText && taskText.length > 0) {
      const newTask: Task = {
        id: new Date().getTime(),
        text: taskText,
        isCompleted: false,
      };
      values.toDoInput = "";
      dispatch(addTask(newTask));
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
      <AppHeader amountOfTasks={tasks.length} activeBtn={filter} />
      <form className="form" onSubmit={handleSubmit(handleAddTask)}>
        <div className="main">
          <Field
            className="main-input ant-input"
            name="toDoInput"
            component="input"
            type="text"
            placeholder="Enter your new task here..."
          />
          <button
            id="btn-add"
            className="button-add"
            type="submit"
            disabled={pristine || submitting}
          >
            Submit
          </button>
          <label htmlFor="btn-add" className="add-icon">
            {<PlusCircleOutlined />}
          </label>
        </div>
        {isTasksExist && <TodoList tasksList={filteredTasks} />}
      </form>
    </>
  );
};

export default reduxForm({
  form: "toDo",
})(ToDo);
