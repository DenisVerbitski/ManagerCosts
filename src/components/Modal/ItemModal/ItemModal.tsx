import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Modal, Button, Input } from "antd";
import { DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./ItemModal.less";
import moment from "moment";
import { addItemToCategory } from "../../../reducers/spentsData";

interface ItemModalProps {
  indexOfCategory: number;
}

export const ItemModal = (props: ItemModalProps) => {
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const onFinish = (category: {
    name: string;
    date: moment.Moment;
    spent: number;
  }) => {
    const { name, date, spent } = category;
    dispatch(
      addItemToCategory({
        indexOfCategory: props.indexOfCategory,
        itemToAdd: {
          date: date.format("DD/MM/YYYY"),
          name: name,
          spent: spent,
        },
      })
    );
  };

  return (
    <div>
      <Button className={styles.modalButton} type="text" onClick={showModal}>
        <PlusOutlined />
      </Button>
      <Modal
        className={styles.ItemModalStyles}
        onOk={hideModal}
        onCancel={hideModal}
        destroyOnClose={true}
        visible={isVisible}
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
            <Input
              ref={(ref) => ref?.focus()}
              placeholder="Название заведения"
            />
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
              onClick={hideModal}
            >
              Ok
            </Button>
            <Button
              className={styles.cancelButton}
              htmlType="button"
              onClick={hideModal}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
