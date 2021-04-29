import React from "react";
import { IFormData, ModalComponent, } from "../Modal/ModalComponent/ModalComponent";
import styles from "../PageHeader/Navbar.less";
import { PageHeader } from "antd";

//className = {styles.selector} - импорт стилей
interface NavbarProps {
  onCreateElement: (values: IFormData) => void
}
export const Navbar = (props: NavbarProps) => {
  return (
    <div>
      <PageHeader
        className={styles.sitepageheader}
        title="Менеджер Расходов"
        extra={[<ModalComponent onCreateElement = {props.onCreateElement} />]}
      />
    </div>
  );
};
