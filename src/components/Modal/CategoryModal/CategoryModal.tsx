import { useState } from "react";
import styles from "./CategoryModal.less";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Modal, Button, Input } from "antd";
import FormCategory from "./interfaces/FormCategory";

interface CategoryModalProps {
  onAddCategory: (category: FormCategory) => void;
}

export const CategoryModal = (props: CategoryModalProps) => {
  const [isVisible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const onFinish = (categoryToAdd: FormCategory) => {
    props.onAddCategory(categoryToAdd);
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
      <Button
        icon={<PlusOutlined />}
        className={styles.categoryModalButton}
        type="text"
        onClick={showModal}
      >
        Добавить
      </Button>

      <Modal
        className={styles.CategoryModalStyles}
        onCancel={handleCancel}
        destroyOnClose={true}
        visible={isVisible}
        title="Категории"
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
              onClick={handleOk}
            >
              Oк
            </Button>
            <Button
              className={styles.cancelButton}
              htmlType="button"
              onClick={handleCancel}
            >
              Отмена
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
