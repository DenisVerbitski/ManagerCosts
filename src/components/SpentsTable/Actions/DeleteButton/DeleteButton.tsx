import { useDispatch } from "react-redux";
import { DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./DeleteButton.less";
import {
  deleteCategory,
  deleteItemFromCategory,
} from "../../../../reducers/spentsData";

interface IDeleteProps {
  indexOfCategory: number;
  indexOfItemInCategory?: number;
}

const DeleteButton = (props: IDeleteProps) => {
  const dispatch = useDispatch();
  const { indexOfCategory, indexOfItemInCategory } = props;
  const onClick = () => {
    if (indexOfItemInCategory === undefined) {
      dispatch(deleteCategory({ indexOfCategoryToDelete: indexOfCategory }));
    } else {
      dispatch(
        deleteItemFromCategory({
          indexOfCategory,
          indexOfItemInCategory,
        })
      );
    }
  };

  return (
    <Button className={styles.deleteButton} type="link" onClick={onClick}>
      <DeleteFilled />
    </Button>
  );
};

export default DeleteButton;
