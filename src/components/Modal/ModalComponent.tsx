import { Fragment, useState } from "react";
import styles from "../Modal/ModalComponent.less";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Modal, Button, Input } from "antd";
import { ITableGroupElement } from '../TableComponent/Table'
import { DateComponent } from "../DateComponent/DateComponent";
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
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {

    setVisible(false);
  };
  return (
    <div>
      <Button className={styles.modalButton} type="text" onClick={showModal}>
        <p>
          <b> Добавить расходы</b>{" "}
          <PlusOutlined className={styles.buttonPlus} />
        </p>
      </Button>

      <Modal
        destroyOnClose={true}
        visible={visible}
        title="Введите данных о расходах"
        footer={[]}
      >
        <Form onFinish={onFinish}>
          <Form.Item name="category">
            <Input placeholder="Введите категорию" />
          </Form.Item>
          <Form.Item name="namePlace">
            <Input placeholder="Введите название заведения" />
          </Form.Item>
          <Form.Item name="date">
            <DateComponent />
          </Form.Item>
          <Form.Item name="cost">
            <Input placeholder="Введите колличество потраченых денег в рублях" />
          </Form.Item>
          <Form.Item>
            <Fragment>
              <Button type="primary" htmlType="submit" onClick={handleOk}>
                Submit
              </Button>
              <Button htmlType="button" onClick={handleCancel}>
                Cancel
              </Button>
            </Fragment>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
