import { Button, PageHeader } from "antd";

import { CategoryModal } from "../CategoryModal/CategoryModal";
import { Authorization } from "../Authorization/login/login";

import styles from "./Navbar.less";
import { Registration } from "../Authorization/Registration/Registration";
import { useSelector } from "react-redux";

interface RootState {
  user: any;
}

export const Navbar = () => {
  const isAuth = useSelector((state: RootState) => state.user?.isAuth);
  return (
    <div>
      <PageHeader
        className={styles.sitePageHeader}
        title="Менеджер расходов"
        extra={[
          !isAuth && <Authorization />,
          !isAuth && <Registration />,
          isAuth && <Button type="primary">Выход</Button>,
          !isAuth && <CategoryModal />,
        ]}
      ></PageHeader>
    </div>
  );
};
