import styles from "../AddModal/AddModal.less";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Modal, Button, Input } from "antd";
import { Fragment, useState } from "react";
import { DatePicker, Space } from "antd";
import { IFormElementData } from "../ModalComponent/ModalComponent";

interface AddModalProps {
  index: number;
  onAddItem: (index: number, element: IFormElementData) => void;
}
export const AddModal = (props: AddModalProps) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const onFinish = (values: IFormElementData) => {
    props.onAddItem(props.index, values);
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
        <Form onFinish={onFinish}>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Пожалуйста введите название заведения",
              },
            ]}
          >
            <Input placeholder="Название заведения" />
          </Form.Item>
          <Form.Item
            name="date"
            rules={[
              {
                required: true,
                message: "Пожалуйста дату",
              },
            ]}
          >
            <Space direction="vertical">
              <DatePicker className={styles.date} placeholder="Дата" />
            </Space>
          </Form.Item>
          <Form.Item
            name="spent"
            rules={[
              {
                required: true,
                message: "Пожалуйста введите колличество потраченых денег",
              },
            ]}
          >
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
