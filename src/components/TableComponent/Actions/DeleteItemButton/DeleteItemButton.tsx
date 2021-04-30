import { DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./DeleteItemButton.less";

interface IDeleteItemProps {
  onDeleteItem: (indexCat: number, indexItem: number) => void;
  indexCat: number;
  indexItem: number;
}

const DeleteItemButton = (props: IDeleteItemProps) => {
  const onClick = () => {
    props.onDeleteItem(props.indexCat, props.indexItem);
  };

  return (
    <Button className={styles.deleteButton} type="link">
      <DeleteFilled onClick={onClick} />
    </Button>
  );
};

export default DeleteItemButton;
