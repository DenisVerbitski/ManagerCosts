import { Space } from "antd";
import { ItemModal } from "../../Modal/ItemModal/ItemModal";
import FormCategoryItem from "../../Modal/ItemModal/interfaces/FormCategoryItem";
import DeleteButton from "./DeleteButton/DeleteButton";

interface IActionsProps {
  onAddItemToCategory: (
    indexOfCategory: number,
    itemToAdd: FormCategoryItem
  ) => void;
  onDeleteCategory: (indexOfCategory: number) => void;
  indexOfCategory: number;
}

const Actions = (props: IActionsProps) => {
  return (
    <Space size="small">
      <DeleteButton
        indexOfCategory={props.indexOfCategory}
        onClick={props.onDeleteCategory}
      />
      <ItemModal
        onAddItemToCategory={props.onAddItemToCategory}
        indexOfCategory={props.indexOfCategory}
      />
    </Space>
  );
};

export default Actions;
