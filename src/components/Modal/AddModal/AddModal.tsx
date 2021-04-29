import styles from "../AddModal/AddModal.less";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Modal, Button, Input } from "antd";
import React, { Fragment, useState } from "react";
import { DateComponent } from "../../DateComponent/DateComponent";

export const AddModal = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
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
        <PlusOutlined />
      </Button>
      <Modal
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
        visible={visible}
        footer={false}
        title="Введите данных о расходах"
      >
        <Form>
          <Form.Item name="namePlace">
            <Input placeholder="Название заведения" />
          </Form.Item>
          <Form.Item name="date">
            <DateComponent />
          </Form.Item>
          <Form.Item name="cost">
            <Input placeholder="Колличество потраченых денег в рублях" />
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
};
