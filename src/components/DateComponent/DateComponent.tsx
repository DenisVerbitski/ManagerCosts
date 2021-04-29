import React from "react";
import styles from '../DateComponent/DateComponent.less'
import { DatePicker, Space } from "antd";

export const DateComponent = () => {
  return (
    <div>
      <Space direction="vertical">
        <DatePicker className={styles.date} placeholder = "Введите дату"/>
      </Space>
    </div>
  );
};
