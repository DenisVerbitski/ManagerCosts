import React, { useState } from "react";
import { Modal, Button, Form } from "antd";
import styles from "../Registration/Registration.less";
import { registration } from "../../../actions/user";
import Input from "../../Input/Input";

export const Registration = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const addUser = () => {
    registration(UserName, password)
    setIsModalVisible(false);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  }
  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
      >
        Регистрация
      </Button>
      <Modal
        className={styles.registrationModalStyles}
        title="Регистрация"
        onOk={closeModal}
        onCancel={closeModal}
        visible={isModalVisible}
        destroyOnClose={true}
        footer={false}
      >
        <Form className={styles.formStyle}>
          <Form.Item
            label="Имя Пользователя"
            name="username"
          >
            <Input value={UserName} setValue={setUserName} placeholder="Имя" autoFocus />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
          >
            <Input type="password" value={password} setValue={setPassword} placeholder="Пароль" />
          </Form.Item>
          <Form.Item>
            <Button
              className={styles.okButton}
              type="primary"
              htmlType="submit"
              onClick={addUser}
            >
              Регистрация
            </Button>
            <Button onClick={closeModal} className={styles.cancelButton} htmlType="button">
              Выход
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
