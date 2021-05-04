import { Space } from "antd";
import { ItemModal } from "../../Modal/ItemModal/ItemModal";
import FormItem from "../../Modal/ItemModal/interfaces/FormItem";
import DeleteButton from "./DeleteButton/DeleteButton";

interface IActionsProps {
  onAddItem: (index: number, element: FormItem) => void;
  onDeleteCategory: (index: number) => void;
  index: number;
}

const Actions = (props: IActionsProps) => {
  return (
    <Space size="small">
      <DeleteButton
        indexCategory={props.index}
        onClick={props.onDeleteCategory}
      />
      <ItemModal onAddItem={props.onAddItem} index={props.index} />
    </Space>
  );
};

export default Actions;
