import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Modal, Button, Tooltip } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { changeTask } from "../../store/actions";
import { RootState } from "../../store/appState";
import { Input } from "../../components/custom-input/CustomInput";
import { MIN_LENGTH_2, MAX_LENGTH_25 } from "../../store/constants/validatorConstants";

import "./ModalWindow.css";

const ModalWindowContainer = ({
  handleSubmit,
  pristine,
  submitting,
  onChange,
  ownProps,
}: any) => {
  const { id } = ownProps;

  const [visible, setVisible] = useState(false);

  const showModal = (): void => {
    setVisible(true);
  };

  const handleOk = (values: any): void => {
    setVisible(false);
    onChange(id, values.modalWindowInput);
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
      <Tooltip title="Edit text!" placement="right">
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
        <form className="form-modal" onSubmit={handleSubmit(handleOk)}>
          <Field
            className="modal-input ant-input"
            name="modalWindowInput"
            component={Input}
            type="text"
            placeholder="Enter your new task here..."
            validate={[MIN_LENGTH_2, MAX_LENGTH_25]}
          />
          <button
            className="ant-btn ant-btn-primary"
            type="submit"
            disabled={pristine}
          >
            Ок
          </button>
        </form>
      </Modal>
    </div>
  );
};

const formCreator = reduxForm({
  form: "toDoWindow",
  touchOnChange: true,
});

const connector = connect(
  (state: RootState, props: any) => ({
    tasks: state.tasks,
    ownProps: props,
  }),
  (dispatch) => ({
    onChange: (id: number, value: any) => dispatch(changeTask(id, value)),
  })
);

interface ModalTypes {
  handleSubmit: () => {};
  pristine: boolean;
  submitting: boolean;
  onChange: () => {};
  ownProps: () => {};
}

export const ModalWindow = connector(formCreator(ModalWindowContainer));
