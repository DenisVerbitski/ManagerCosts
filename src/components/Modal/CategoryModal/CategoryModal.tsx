import { useState } from "react";
import { useDispatch } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Modal, Button, Input } from "antd";
import styles from "./CategoryModal.less";
import FormCategory from "./interfaces/FormCategory";
import { addCategory } from "../../../reducers/spentsData";

export const CategoryModal = () => {
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const onFinish = (categoryToAdd: FormCategory) => {
    dispatch(addCategory(categoryToAdd));
    hideModal();
  };

  return (
    <div>
      <Button
        icon={<PlusOutlined />}
        className={styles.modalButton}
        type="text"
        onClick={showModal}
      >
        Добавить
      </Button>

      <Modal
        className={styles.CategoryModalStyles}
        onCancel={hideModal}
        destroyOnClose={true}
        visible={isVisible}
        title="Добавить категорию"
        footer={false}
      >
        <Form onFinish={onFinish}>
          <Form.Item
            name="name"
            rules={[
              { required: true, message: "Пожалуйста введите категорию" },
            ]}
          >
            <Input
              ref={(ref) => ref?.focus()}
              placeholder="Название категории"
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
