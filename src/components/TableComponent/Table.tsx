import { Table } from "antd";
import styles from "./Table.less";
import FormCategory from "../Modal/CategoryModal/interfaces/FormCategory";
import FormCategoryItem from "../Modal/ItemModal/interfaces/FormCategoryItem";
import { useCallback, useState } from "react";
import React from "react";
import TableCategory from "./interfaces/TableCategory";
import TableCategoryItem from "./interfaces/TableCategoryItem";
import Actions from "./Actions/Actions";
import DeleteButton from "./Actions/DeleteButton/DeleteButton";

interface TableProps {
  formData: FormCategory[];
  onDeleteCategory: (indexCategory: number) => void;
  onAddCategoryItem: (indexCategory: number, categoryItem: FormCategoryItem) => void;
  onDeleteCategoryItem: (indexCategory: number, indexCategoryItem: number) => void;
}

export const TableComponent = (props: TableProps) => {
  const [tableData, setTableData] = useState<TableCategory[]>([]);

  const handleDeleteItemClick = (
    indexCategory: number,
    indexCategoryItem?: number
  ) => {
    if (indexCategoryItem !== undefined) props.onDeleteCategoryItem(indexCategory, indexCategoryItem);
  };

  const createTableCategory = (formCategory: FormCategory, indexCategory: number) => {
    const category: TableCategory = {
      key: indexCategory,
      name: formCategory.name,
      date: "Дата",
      spent: "Потрачено",
      actions: (
        <Actions
          onAddItem={props.onAddCategoryItem}
          onDeleteCategory={props.onDeleteCategory}
          indexCategory={indexCategory}
        />
      ),
      children: [],
    };
    return category;
  };

  const createTableCategoryItem = ( 
    formItem: FormCategoryItem,
    indexCategory: number,
    indexCategoryItem: number
  ) : TableCategoryItem => {
    const {date, name, spent} = formItem;
    const categoryItem: TableCategoryItem = {
      name: name,
      date: date,
      spent: spent,
      key: indexCategoryItem,
      actions: (
        <DeleteButton
          indexCategory={indexCategory}
          indexCategoryItem={indexCategoryItem}
          onClick={handleDeleteItemClick}
        />
      ),
    };
    return categoryItem;
  };

  const convertFormToTable = (formData: FormCategory[]): TableCategory[] => {
    const convertedData: TableCategory[] = [];
    formData.forEach((value, indexCategory) => {
      const category = createTableCategory(value, indexCategory);

      value.children.forEach((value, indexCategoryItem) => {
        const categoryItem = createTableCategoryItem(value, indexCategory, indexCategoryItem);
        category.children.push(categoryItem);
      });

      convertedData.push(category);
    });

    return convertedData;
  };

  React.useEffect(() => {
    const convertedData = convertFormToTable(props.formData);
    setTableData(convertedData);
  }, [props.formData]);

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
