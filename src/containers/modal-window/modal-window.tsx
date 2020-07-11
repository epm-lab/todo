import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTask } from "../../store/actions";
import { Modal, Button, Input, Tooltip } from "antd";
import { EditOutlined } from '@ant-design/icons';

import './modal-window.css';

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

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleOk();
    }
  };

  return (
    <div className="modal">
			<Button className="button-modal" id={`button${id}`} onClick={showModal}>
			</Button>
			<Tooltip title="Edit this text!" placement="right">
				<label htmlFor={`button${id}`} className="edit-pencil">{<EditOutlined />}</label>
			</Tooltip>	
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
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
            handleEnter(e)
          }
        />
      </Modal>
    </div>
  );
};

export default ModalWindow;
