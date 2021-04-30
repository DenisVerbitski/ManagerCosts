import { Space } from "antd";
import { ItemModal } from "../../Modal/ItemModal/ItemModal";
import FormItem from "../../Modal/ItemModal/interfaces/FormItem";
import DeleteCategoryButton from "../DeleteCategoryButton/DeleteCategoryButton";

interface IActionsProps {
  onAddItem: (index: number, element: FormItem) => void;
  onDeleteCategory: (index: number) => void;
  index: number;
}

const Actions = (props: IActionsProps) => {
  return (
    <Space size="small">
      <DeleteCategoryButton
        index={props.index}
        onDeleteCategory={props.onDeleteCategory}
      />
      <ItemModal onAddItem={props.onAddItem} index={props.index} />
    </Space>
  );
};

export default Actions;
