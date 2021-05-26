import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { addItemToCategory } from "../../reducers/spentsData";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import ModalElement from "../ModalWindow/interfaces/ModalElement";

import styles from "./CategoryItemModal.less";

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
      label: "Введите название заведения",
      placeholder: "Название",
      dataType: "text",
    },
    {
      name: "date",
      type: "datePicker",
      label: "Введите дату",
      placeholder: "Дата",
    },
    {
      name: "spent",
      type: "inputNumber",
      label: "Введите колличество потраченых денег",
      placeholder: "Колличество потраченых денег в рублях",
      dataType: "number",
    },
  ];

  return (
    <div>
      <Button className={styles.itemModalButton} type="text" onClick={showModal}>
        <PlusOutlined />
      </Button>

      <ModalWindow
        onFinish={onFinish}
        title="Добавить расход"
        fields={fields}
        isVisible={isVisible}
        onHideModal={hideModal}
      />
    </div>
  );
};
