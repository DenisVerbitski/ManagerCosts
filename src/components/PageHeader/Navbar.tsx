import { PageHeader } from "antd";
import styles from "./Navbar.less";
import { CategoryModal } from "../Modal/CategoryModal/CategoryModal";

export const Navbar = () => {
  return (
    <div>
      <PageHeader
        className={styles.sitepageheader}
        title="Менеджер Расходов"
        extra={[<CategoryModal key="0" />]}
      />
    </div>
  );
};
