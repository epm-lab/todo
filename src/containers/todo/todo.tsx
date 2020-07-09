import React, { ReactElement } from "react"
import {useDispatch, useSelector  } from 'react-redux'
import { InjectedFormProps, reduxForm, Field } from 'redux-form'
import { RootState, Task } from '../../store/appState'
import { addTask } from '../../store/actions'
import { AppHeader } from '../../components/app-header/appHeader'
import TodoList from '../../components/todo-list/todo-list';
import 'antd/dist/antd.css'
import './todo.css'

function ToDo(props: InjectedFormProps): ReactElement{
  const dispatch = useDispatch()
  const filter = useSelector((state: RootState) => state.filter)
  const tasks = useSelector((state: RootState) => state.tasks)
  const isTasksExist = tasks && tasks.length > 0
  const { handleSubmit } = props

  const handleAddTask = (values: any) => {
    const taskText: string = values.toDoInput
    if (taskText && taskText.length > 0) {
      const newTask: Task = {
        id: (new Date()).getTime(),
        text: taskText,
        isCompleted: false,
      }
      dispatch(addTask(newTask))
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit(handleAddTask)}>
      {/*TODO: import AppHeader component here instead of App*/}
      {/*<AppHeader amount={tasks.length} activeFilter={filter} />*/}
      <Field
        className="main-input"
        name="toDoInput"
        component="input"
        type="text"
        placeholder="Enter you task here..."
      />
      {/*TODO: import TodoList component*/}
      {isTasksExist && <TodoList tasksList={tasks} />}
    </form>
  )
}

export default reduxForm({
  form: 'toDo',
})(ToDo);

