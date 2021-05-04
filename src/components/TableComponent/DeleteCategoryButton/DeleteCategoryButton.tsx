import { DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./DeleteCategoryButton.less";

interface IDeleteCategoryProps {
  onDeleteCategory: (index: number) => void;
  index: number;
}

const DeleteCategoryButton = (props: IDeleteCategoryProps) => {
  const onClick = () => {
    props.onDeleteCategory(props.index);
  };

  return (
    <Button className={styles.deleteButton} type="link">
      <DeleteFilled onClick={onClick} />
    </Button>
  );
};

export default DeleteCategoryButton;
