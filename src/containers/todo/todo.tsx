import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InjectedFormProps, reduxForm, Field } from "redux-form";
import { RootState, Task } from "../../store/appState";
import { addTask } from "../../store/actions";
import { AppHeader } from "../../components/app-header/appHeader";
import { COMPLETED, ACTIVE } from "../../store/filterConstants";
import TodoList from "../../components/todo-list/todo-list";
import "antd/dist/antd.css";
import "./todo.css";

function ToDo(props: InjectedFormProps): ReactElement {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);
  const tasks = useSelector((state: RootState) => state.tasks);
  const isTasksExist = tasks && tasks.length > 0;
  const { handleSubmit } = props;

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
      <AppHeader amountOfTasks={tasks.length} activeFilter={filter} />
      <form className="form" onSubmit={handleSubmit(handleAddTask)}>
        <Field
          className="main-input"
          name="toDoInput"
          component="input"
          type="text"
          placeholder="Enter you task here..."
        />
        {/*TODO: import TodoList component*/}
        {isTasksExist && <TodoList tasksList={filteredTasks} />}
      </form>
    </>
  );
}

export default reduxForm({
  form: "toDo",
})(ToDo);
