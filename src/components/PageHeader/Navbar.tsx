import { CategoryModal } from "../Modal/CategoryModal/CategoryModal";
import FormCategory from "../Modal/CategoryModal/interfaces/FormCategory";
import styles from "../PageHeader/Navbar.less";
import { PageHeader } from "antd";

interface NavbarProps {
  onCreateElement: (values: FormCategory) => void;
}

export const Navbar = (props: NavbarProps) => {
  return (
    <div>
      <PageHeader
        className={styles.sitepageheader}
        title="Менеджер Расходов"
        extra={[
        <CategoryModal
         key="0" 
         onCreateElement={props.onCreateElement} 
         />
        ]}
      />
    </div>
  );
};
