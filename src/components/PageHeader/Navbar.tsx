import { CategoryModal } from "../Modal/CategoryModal/CategoryModal";
import styles from "./Navbar.less";
import { PageHeader } from "antd";

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
