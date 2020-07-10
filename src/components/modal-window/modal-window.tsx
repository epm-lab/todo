import {  Modal, Button  } from 'antd';
import React from "react";
import { useState } from 'react';
import { Field } from 'redux-form';
 
const ModalWindow = () => {
  const [ visible, setVisible ] = useState(false);

  const showModal = ():void => {
    setVisible(true);
  };

  const closeWindow = ():void => {
    setVisible(false);
  };

	return (
			<div>
			<Button type="primary" onClick={showModal}>
					Editing
			</Button>
			<Modal
					title="Basic Modal"
					visible={visible}
					onOk={closeWindow}
					onCancel={closeWindow}
			>
					Editing
			</Modal>
			</div>
	);
}

export default ModalWindow;