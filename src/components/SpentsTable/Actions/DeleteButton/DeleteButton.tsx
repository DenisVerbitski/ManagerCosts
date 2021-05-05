import { DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./DeleteButton.less";

interface IDeleteProps {
  onClick: (indexOfCategory: number, indexOfItemInCategory?: number) => void;
  indexOfCategory: number;
  indexOfItemInCategory?: number;
}

const DeleteButton = (props: IDeleteProps) => {
  const onClick = () => {
    if (props.indexOfItemInCategory === undefined) {
      props.onClick(props.indexOfCategory);
    } else {
      props.onClick(props.indexOfCategory, props.indexOfItemInCategory);
    }
  };

  return (
    <Button className={styles.deleteButton} type="link" onClick={onClick}>
      <DeleteFilled />
    </Button>
  );
};

export default DeleteButton;
