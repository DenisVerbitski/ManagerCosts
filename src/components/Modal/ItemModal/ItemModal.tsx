import styles from "./ItemModal.less";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Modal, Button, Input } from "antd";
import { useState } from "react";
import { DatePicker } from "antd";
import FormCategoryItem from "./interfaces/FormCategoryItem";
import moment from "moment";

interface ItemModalProps {
  indexOfCategory: number;
  onAddItemToCategory: (
    indexOfCategory: number,
    itemToAdd: FormCategoryItem
  ) => void;
}
export const ItemModal = (props: ItemModalProps) => {
  const [isVisible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const onFinish = (category: {
    name: string;
    date: moment.Moment;
    spent: number;
  }) => {
    const { name, date, spent } = category;
    props.onAddItemToCategory(props.indexOfCategory, {
      date: date.format("MM/DD/YYYY"),
      name: name,
      spent: spent,
    });
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button
        className={styles.itemModalButton}
        type="text"
        onClick={showModal}
      >
        <PlusOutlined />
      </Button>
      <Modal
        className={styles.ItemModalStyles}
        onOk={closeModal}
        onCancel={closeModal}
        destroyOnClose={true}
        visible={isVisible}
        footer={false}
        title="Данные о расходах"
      >
        <Form onFinish={onFinish}>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Пожалуйста введите название",
              },
            ]}
          >
            <Input ref={(ref) => ref?.focus()} placeholder="Название" />
          </Form.Item>
          <Form.Item
            name="date"
            initialValue={moment()}
            rules={[
              {
                required: true,
                message: "Пожалуйста введите дату",
              },
            ]}
          >
            <DatePicker
              className={styles.date}
              placeholder="Дата"
              format="MM/DD/YYYY"
            />
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
            <Input
              type="number"
              placeholder="Колличество потраченых денег в рублях"
            />
          </Form.Item>
          <Form.Item>
            <Button
              className={styles.okButton}
              type="primary"
              htmlType="submit"
              onClick={closeModal}
            >
              Oк
            </Button>
            <Button
              className={styles.cancelButton}
              htmlType="button"
              onClick={closeModal}
            >
              Отмена
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
