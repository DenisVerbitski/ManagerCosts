import { useState } from "react";
import { useDispatch } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./CategoryModal.less";
import FormCategory from "./interfaces/FormCategory";
import { addCategory } from "../../reducers/spentsData";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { ModalDatePicker } from "../ModalWindow/ModalDatePicker";

import { ModalInput } from "../ModalWindow/ModalInput";

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

  const fields: (ModalInput | ModalDatePicker)[] = [
    {
      name: "name",
      type: "input",
      label: "Категория",
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
        onClose={hideModal}
      />
    </div>
  );
};
