import { Space } from "antd";
import { CategoryItemModal } from "../../CategoryItemModal/CategoryItemModal";
import DeleteButton from "./DeleteButton/DeleteButton";

interface IActionsProps {
  indexOfCategory: number;
}

const Actions = (props: IActionsProps) => {
  return (
    <Space size="small">
      <DeleteButton indexOfCategory={props.indexOfCategory} />
      <CategoryItemModal indexOfCategory={props.indexOfCategory} />
    </Space>
  );
};

export default Actions;
