import { Space } from "antd";

import DeleteButton from "./DeleteButton/DeleteButton";
import { CategoryItemModal } from "../../CategoryItemModal/CategoryItemModal";

interface IActionsProps {
  indexOfCategory: number;
}

const Actions = (props: IActionsProps) => {
  const indexOfCategory = props.indexOfCategory;
  return (
    <Space size="small">
      <DeleteButton indexOfCategory={indexOfCategory} />
      <CategoryItemModal indexOfCategory={indexOfCategory} />
    </Space>
  );
};

export default Actions;
