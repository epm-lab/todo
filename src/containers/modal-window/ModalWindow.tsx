import React from "react";
import { Field, reduxForm } from 'redux-form'
import { useState } from "react";
import { connect } from "react-redux";
import { changeTask } from "../../store/actions";
import { Modal, Button, Tooltip } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { RootState } from "../../store/appState";

import "./ModalWindow.css";

const ModalWindowContainer = (props: any) => {
  const { id } = props.ownProps
  const { handleSubmit, pristine, submitting, dispatch } = props
  const [visible, setVisible] = useState(false);

  const showModal = (): void => {
    setVisible(true);
  };

  const handleOk = (values: any): void => {
    setVisible(false);
    dispatch(changeTask(id, values.modalWindowInput));
    values.modalWindowInput = "";
  };

  const handleCancel = (): void => {
    setVisible(false);
  };

  return (
    <div className="modal">
      <Button
        className="button-modal"
        id={`button${id}`}
        onClick={showModal}
      ></Button>
      <Tooltip title="Edit this text!" placement="right">
        <label htmlFor={`button${id}`} className="edit-pencil">
          {<EditOutlined />}
        </label>
      </Tooltip>
      <Modal
        title="Editing text"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className="form-modal" onSubmit={handleSubmit(handleOk)} >
          <Field
            className="modal-input ant-input"
            name="modalWindowInput"
            component="input"
            type="text"
            placeholder="Enter your new task here..."
          />
          <button className="ant-btn ant-btn-primary" type="submit" disabled={pristine || submitting}>
            Ок
          </button>
        </form>
      </Modal>
    </div >
  );
};

const formCreator = reduxForm({
  form: "toDoWindow",
});

const connector = connect(
  (state: RootState, props: any) => ({
    tasks: state.tasks,
    ownProps: props
  }),
  {
    changeTask
  }
)

export const ModalWindow = connector(formCreator(ModalWindowContainer))
