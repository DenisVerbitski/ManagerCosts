import { useDispatch } from "react-redux";
import {
  deleteCategory,
  deleteItemFromCategory,
} from "../../../../reducers/spentsData";

import { Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";

import styles from "./DeleteButton.less";
interface DeleteButtonProps {
  indexOfCategory: number;
  indexOfItemInCategory?: number;
}

const DeleteButton = (props: DeleteButtonProps) => {
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
