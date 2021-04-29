import { Fragment, useState } from "react";
import styles from "../ModalComponent/ModalComponent.less";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Modal, Button, Input } from "antd";
import { ITableGroupElement } from "../../TableComponent/Table";
import { DateComponent } from "../../DateComponent/DateComponent";
import React from "react";

export interface IFormElementData {
  name: string;
  date: string;
  spent: string;
}
export interface IFormData {
  category: string;
  children: Array<IFormElementData>;
}
interface ModalComponentProps {
  onCreateElement: (values: IFormData) => void;
}

export function ModalComponent(props: ModalComponentProps) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const onFinish = (values: IFormData) => {
    props.onCreateElement(values);
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <div>
      <Button icon={<PlusOutlined />} className={styles.modalButton} type="text" onClick={showModal}>
            Добавить 
      </Button>

      <Modal
        onCancel={handleCancel}
        destroyOnClose={true}
        visible={visible}
        title="Добавить категорию"
        footer={false}
      >
        <Form onFinish={onFinish}>
          <Form.Item
            name="category"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Название категории" />
          </Form.Item>
          <Form.Item>
            <Fragment>
              <Button
                className={styles.okButton}
                type="primary"
                htmlType="submit"
                onClick={handleOk}
              >
                Ok
              </Button>
              <Button
                className={styles.cancelButton}
                htmlType="button"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Fragment>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
