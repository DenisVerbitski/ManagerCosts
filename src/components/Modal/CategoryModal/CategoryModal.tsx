import { Fragment, useState } from "react";
import styles from "./CategoryModal.less";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Modal, Button, Input } from "antd";
import FormCategory from "./interfaces/FormCategory";

interface CategoryModalProps {
  onCreateElement: (values: FormCategory) => void;
}

export const CategoryModal = (props: CategoryModalProps) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const onFinish = (values: FormCategory) => {
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
      <Button
        icon={<PlusOutlined />}
        className={styles.modalButton}
        type="text"
        onClick={showModal}
      >
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
            rules={[
              { required: true, message: "Пожалуйста введите категорию" },
            ]}
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
};