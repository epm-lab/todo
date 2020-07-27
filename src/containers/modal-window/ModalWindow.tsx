import React, { useState } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";
import { Modal, Button, Tooltip } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { changeTask } from "../../store/actions";
import { RootState } from "../../store/appState";
import { Input } from "../../components/custom-input/CustomInput";
import { MIN_LENGTH_2, MAX_LENGTH_25 } from "../../store/constants/validatorConstants";

import "./ModalWindow.css";

const ModalWindowContainer = (props: any) => {
  const {handleSubmit, destroy, initializeModal, initialValues, form, pristine, onChange, ownProps} = props;
  const { id } = ownProps;

  const [visible, setVisible] = useState(false);

  const showModal = (): void => {
    setVisible(true);
    initializeModal(form, initialValues);
  };

  const handleOk = (values: any): void => {
    setVisible(false);
    onChange(id, values.modalWindowInput);
    destroy(form);
  };

  const handleCancel = (): void => {
    setVisible(false);
    destroy(form);
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
            component= {Input}
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
  touchOnBlur: true,
  destroyOnUnmount: true,
  enableReinitialize : true,
});

const connector = connect(
  (state: RootState, props: any) => ({
    tasks: state.tasks,
    initialValues: {modalWindowInput: props.text},
    ownProps: props,
  }),
  (dispatch) => ({
    onChange: (id: number, value: any) => dispatch(changeTask(id, value)),
    initializeModal: (formName: string, initialValues: object) => dispatch(initialize(formName, initialValues)),
  })
);

export const ModalWindow = connector(formCreator(ModalWindowContainer));
