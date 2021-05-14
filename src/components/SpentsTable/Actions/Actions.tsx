import { Space } from "antd";
import { ItemModal } from "../../Modal/ItemModal/ItemModal";
import DeleteButton from "./DeleteButton/DeleteButton";

interface IActionsProps {
  indexOfCategory: number;
}

const Actions = (props: IActionsProps) => {
  return (
    <Space size="small">
      <DeleteButton indexOfCategory={props.indexOfCategory} />
      <ItemModal indexOfCategory={props.indexOfCategory} />
    </Space>
  );
};

export default Actions;
