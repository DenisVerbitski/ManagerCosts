import { Space } from "antd";
import { ItemModal } from "../../Modal/ItemModal/ItemModal";
import FormCategoryItem from "../../Modal/ItemModal/interfaces/FormCategoryItem";
import DeleteButton from "./DeleteButton/DeleteButton";

interface IActionsProps {
  onAddItem: (indexCategory: number, categoryItem: FormCategoryItem) => void;
  onDeleteCategory: (indexCategory: number) => void;
  indexCategory: number;
}

const Actions = (props: IActionsProps) => {
  return (
    <Space size="small">
      <DeleteButton
        indexCategory={props.indexCategory}
        onClick={props.onDeleteCategory}
      />
      <ItemModal onAddCategoryItem={props.onAddItem} indexCategory={props.indexCategory} />
    </Space>
  );
};

export default Actions;
