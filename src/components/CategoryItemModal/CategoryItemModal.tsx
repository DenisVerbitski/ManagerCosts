import { useState } from "react";
import { useDispatch } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./CategoryItemModal.less";
import moment from "moment";
import { addItemToCategory } from "../../reducers/spentsData";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { ModalElement } from "../ModalWindow/ModalElement";
import { Button } from "antd";

interface CategoryItemModalProps {
  indexOfCategory: number;
}

export const CategoryItemModal = (props: CategoryItemModalProps) => {
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

  const fields: ModalElement[] = [
    {
      name: "name",
      type: "input",
      label: "Пожалуйста введите название заведения",
      placeholder: "Название заведения",
      dataType: "text",
    },
    {
      name: "date",
      type: "datePicker",
      label: "Пожалуйста введите дату",
      placeholder: "Дата",
    },
    {
      name: "spent",
      type: "input",
      label: "Пожалуйста введите колличество потраченых денег",
      placeholder: "Колличество потраченых денег в рублях",
      dataType: "number",
    },
  ];

  return (
    <div>
      <Button className={styles.modalButton} type="text" onClick={showModal}>
        <PlusOutlined />
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
