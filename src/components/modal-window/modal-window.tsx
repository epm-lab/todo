import {  Modal, Button, Input  } from 'antd';
import React from "react";
import { useState } from 'react';
import { Field } from 'redux-form';

interface ModalType {
	text: string;
}
 
const ModalWindow = ({ text }:ModalType) => {
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
					title="Editing"
					visible={visible}
					onOk={closeWindow}
					onCancel={closeWindow}
			>
				<Field 
					name="editInput" 
					component={()=> <input type="text" defaultValue={text}/>}
					onChange={(e: React.FormEvent<HTMLInputElement>) => console.log(e)}
				/>
			</Modal>
			</div>
	);
}

export default ModalWindow;