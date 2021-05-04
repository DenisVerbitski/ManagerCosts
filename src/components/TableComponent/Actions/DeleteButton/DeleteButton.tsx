import { DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./DeleteButton.less";

interface IDeleteProps {
  onClick: (indexCategory: number, indexCategoryItem?: number) => void;
  indexCategory: number;
  indexCategoryItem?: number;
}

const DeleteButton = (props: IDeleteProps) => {
  const onClick = () => {
    if (props.indexCategoryItem) {
      props.onClick(props.indexCategory, props.indexCategoryItem);
    } else {
      props.onClick(props.indexCategory);
    }
  };

  return (
    <Button className={styles.deleteButton} type="link" onClick={onClick}>
      <DeleteFilled />
    </Button>
  );
};

export default DeleteButton;
