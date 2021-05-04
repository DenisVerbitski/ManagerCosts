import { Table } from "antd";
import styles from "./Table.less";
import FormCategory from "../Modal/CategoryModal/interfaces/FormCategory";
import FormItem from "../Modal/ItemModal/interfaces/FormItem";
import { useCallback, useState } from "react";
import React from "react";
import TableCategory from "./interfaces/TableCategory";
import TableItem from "./interfaces/TableItem";
import Actions from "./Actions/Actions";
import DeleteItemButton from "./Actions/DeleteItemButton/DeleteItemButton";

interface TableProps {
  data: Array<FormCategory>;
  onDeleteCategory: (index: number) => void;
  onAddItem: (index: number, element: FormItem) => void;
  onDeleteItem: (indexCat: number, indexItem: number) => void;
}

export const TableComponent = (props: TableProps) => {
  const [tableData, setTableData] = useState<Array<TableCategory>>([]);

  const createCategory = useCallback(
    (formCategory: FormCategory, index: number) => {
      const category: TableCategory = {
        key: index,
        name: formCategory.name,
        date: "Дата",
        spent: "Потрачено",
        actions: (
          <Actions
            onAddItem={props.onAddItem}
            onDeleteCategory={props.onDeleteCategory}
            index={index}
          />
        ),
        children: [],
      };
      return category;
    },
    [props.onAddItem, props.onDeleteCategory]
  );

  const createItem = useCallback(
    (formItem: FormItem, indexCat: number, indexItem: number) => {
      const { name, date, spent } = formItem;
      const item: TableItem = {
        date: date,
        key: indexItem,
        name: name,
        spent: spent.endsWith(" BYN") ? spent : spent + " BYN",
        actions: (
          <DeleteItemButton
            indexCat={indexCat}
            indexItem={indexItem}
            onDeleteItem={props.onDeleteItem}
          />
        ),
      };
      return item;
    },
    [props.onDeleteItem]
  );

  const convert = useCallback((data: FormCategory []): Array<TableCategory> => {
    const convertedData: Array<TableCategory> = [];
    data.forEach((value, indexCat) => {
      const category = createCategory(value, indexCat);

      value.children.forEach((value, indexItem) => {
        const childElement = createItem(value, indexCat, indexItem);
        category.children.push(childElement);
      });

      convertedData.push(category);
    });

    return convertedData;
  }, [createCategory, createItem]);

  React.useEffect(() => {
    const convertedData = convert(props.data);
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
        className={styles.location}
        showHeader={false}
        dataSource={tableData}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};
