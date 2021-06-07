import React, { useState } from "react";
import { Modal, Button, Form } from "antd";
import styles from "../login/login.less";
import Input from "../../Input/Input";
import { useDispatch } from "react-redux";
import { login } from "../../../actions/user";

export const Authorization = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const authUser = () => {
    dispatch(login(UserName, password));
    setIsModalVisible(false);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Авторизация
      </Button>
      <Modal
        className={styles.authorizationModalStyles}
        title="Авторизация"
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
            <Input
              value={UserName}
              setValue={setUserName}
              placeholder="Имя"
              autoFocus
            />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
          >
            <Input
              type="password"
              value={password}
              setValue={setPassword}
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item>
            <Button
              className={styles.okButton}
              type="primary"
              htmlType="submit"
              onClick={authUser}
            >
              Авторизация
            </Button>
            <Button
              onClick={closeModal}
              className={styles.cancelButton}
              htmlType="button"
            >
              Выход
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
