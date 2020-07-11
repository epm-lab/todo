import { Modal, Button, Input } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTask } from "../../store/actions";

interface ModalType {
  text: string;
  id: number;
}

const ModalWindow = ({ text, id }: ModalType) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [value, setInputValue] = useState(text);

  const showModal = (): void => {
    setVisible(true);
  };

  const handleOk = (): void => {
    setVisible(false);
    if (text !== value) {
      dispatch(changeTask(id, value));
    }
  };

  const handleCancel = (): void => {
    setVisible(false);
    setInputValue(text);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Editing
      </Button>
      <Modal
        title="Editing"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          autoFocus
          type="text"
          value={value}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setInputValue(e.currentTarget.value);
          }}
          onPressEnter={() => handleOk()}
        />
      </Modal>
    </div>
  );
};

export default ModalWindow;
