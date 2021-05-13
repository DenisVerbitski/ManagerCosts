import { PageHeader } from "antd";
import { CategoryModal } from "../CategoryModal/CategoryModal";
import styles from "./Navbar.less";

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
