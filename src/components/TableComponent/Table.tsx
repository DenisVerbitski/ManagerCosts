import { Table, Space } from "antd";
import { Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import styles from "../TableComponent/Table.less";
import { IFormData } from "../Modal/ModalComponent";
import { ReactElement, useState } from "react";
import React from "react";

interface TableProps {
  data: Array<IFormData>;
}
export interface ITableGroupElement {
  key: number;
  name: string;
  date: string;
  spent: string;
  actions: ReactElement;
}
interface ITableElement {
  key: number;
  name: string;
  date: string;
  spent: string;
  actions: ReactElement;
  children: Array<ITableGroupElement>;
}
export const TableComponent = (props: TableProps) => {
  const [data, setData] = useState<Array<ITableElement>>([]);
  React.useEffect(() => {
    convert();
  }, [props.data]);
  const convert = () => {
    const convertedData: Array<ITableElement> = [];

    props.data.forEach((value, index) => {
      const element: ITableElement = {
        key: index,
        name: value.category,
        date: "Дата",
        spent: "Потрачено",
        actions: (
          <>
            <Button className={styles.deleteButton} type="link">
              sddsa
            </Button>
            <Button className={styles.deleteButton} type="link">
              <DeleteFilled />
            </Button>
          </>
        ),
        children: [],
      };
      value.children.forEach((value, index) => {
        const childElement: ITableGroupElement = {
          date: value.date,
          key: index,
          name: value.name,
          spent: value.spent,
          actions: (
            <Button className={styles.deleteButton} type="link">
              <DeleteFilled />
            </Button>
          ),
        };
        element.children.push(childElement);
      });
      convertedData.push(element);
    });
    setData(convertedData);
  };

  const columns = [
    {
      dataIndex: "name",
      key: "name",
      width: "20%",
    },
    {
      dataIndex: "date",
      key: "date",
      width: "20%",
    },
    {
      dataIndex: "spent",
      key: "spent",
      width: "20%",
    },
    {
      dataIndex: "actions",
      key: "actions",
      width: "5%",
      render: () => (
        <Space size="middle">
          <a>Delete</a>
          <a>Invite </a>
        </Space>
      ),
    },
  ];

  return (
    <div className={styles.margin}>
      <Table
        showHeader={false}
        className={styles.cafeTable}
        dataSource={data}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};
