import { DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./DeleteCategoryButton.less";

interface IDeleteCategoryProps {
  kind: "category";
  onDeleteCategory: (index: number) => void;
  index: number;
}

const DeleteCategoryButton = (props: IDeleteCategoryProps) => {
  const onClick = () => {
    if (props.kind === "item") {
    }
    props.onDeleteItem(props.indexCat, props.indexItem);
  };
  return (
    <Button className={styles.deleteButton} type="link">
      <DeleteFilled onClick={onClick} />
    </Button>
  );
};

export default DeleteCategoryButton;
