import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { RootState, Task } from "../../store/appState";
import { addTask } from "../../store/actions";
import AppHeader from "../../components/app-header/AppHeader";
import { COMPLETED, ACTIVE } from "../../store/filterConstants";
import { TodoList } from "../../components/todo-list/TodoList";

import "antd/dist/antd.css";
import "./Todo.css";

//React.Component<InjectedFormProps<IUser, IProps> & IProps>
//:React.Component<CustomProps & InjectedFormProps<{}, CustomProps>>

const ToDoContainer = ({ handleSubmit, pristine, submitting, dispatch, filter, tasks }: any): ReactElement => {

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
      <AppHeader amountOfTasks={tasks.length} activeBtn={filter}/>
      <form className="form-add" onSubmit={handleSubmit(handleAddTask)}>
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
            className="button-add ant-btn ant-btn-primary"
            type="submit"
            disabled={pristine || submitting}
          >
            Add
          </button>
        </div>
        {isTasksExist && <TodoList tasksList={filteredTasks} />}
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
  {
    addTask
  }
)

export const ToDo = connector(formCreator(ToDoContainer));