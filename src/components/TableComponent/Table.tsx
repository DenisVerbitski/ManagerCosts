import { Table, Space } from "antd";
import { Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import styles from "../TableComponent/Table.less";
import {
  IFormData,
  IFormElementData,
} from "../Modal/ModalComponent/ModalComponent";
import { useCallback, useState } from "react";
import { AddModal } from "../Modal/AddModal/AddModal";
import React from "react";
import ITableElement from "./interfaces/ITableElement";
import ITableGroupElement from "./interfaces/ITableGroupElement";

interface TableProps {
  data: Array<IFormData>;
  onAddItem: (index: number, element: IFormElementData) => void;
}

export const TableComponent = (props: TableProps) => {
  const [tableData, setTableData] = useState<Array<ITableElement>>([]);

  const convert = useCallback((): Array<ITableElement> => {
    const convertedData: Array<ITableElement> = [];
    props.data.forEach((value, index) => {
      const element: ITableElement = {
        key: index,
        name: value.category,
        date: "Дата",
        spent: "Потрачено",
        actions: (
          <Space size="small">
            <Button className={styles.deleteButton} type="link">
              <DeleteFilled />
            </Button>
            <AddModal onAddItem={props.onAddItem} index={index} />
          </Space>
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

    return convertedData;
  }, [props.data, props.onAddItem]);

  React.useEffect(() => {
    const convertedData = convert();
    setTableData(convertedData);
  }, [convert, props.data]);

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
      width: "1%",
    },
  ];

  return (
    <div className={styles.margin}>
      <Table
        showHeader={false}
        className={styles.cafeTable}
        dataSource={tableData}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};
