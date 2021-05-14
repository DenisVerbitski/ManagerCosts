import { useState } from "react";
import { useDispatch } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { addCategory } from "../../reducers/spentsData";
import FormCategory from "./interfaces/FormCategory";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import ModalElement from "../ModalWindow/interfaces/ModalElement";

import styles from "./CategoryModal.less";

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
    dispatch(addCategory({categoryToAdd}));
    hideModal();
  };

  const fields: ModalElement[] = [
    {
      name: "name",
      type: "input",
      label: "Пожалуйста введите категорию",
      placeholder: "Название категории",
      dataType: "text",
    },
  ];

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

      <ModalWindow
        onFinish={onFinish}
        title="Добавить категорию"
        fields={fields}
        isVisible={isVisible}
        onHideModal={hideModal}
      />
    </div>
  );
};
