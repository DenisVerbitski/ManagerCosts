import { Table } from "antd";
import styles from "./SpentsTable.less";
import FormCategory from "../Modal/CategoryModal/interfaces/FormCategory";
import FormCategoryItem from "../Modal/ItemModal/interfaces/FormCategoryItem";
import { useState } from "react";
import React from "react";
import SpentsTableCategory from "./interfaces/SpentsTableCategory";
import SpentsTableCategoryItem from "./interfaces/SpentsTableCategoryItem";
import Actions from "./Actions/Actions";
import DeleteButton from "./Actions/DeleteButton/DeleteButton";
import { selectSpentsData } from "../../app/selectors";
import { useSelector } from "react-redux";

export const SpentsTable = () => {
  const CURRENCY_BYN = "BYN";
  const spentsData = useSelector(selectSpentsData);
  const [tableData, setTableData] = useState<SpentsTableCategory[]>([]);

  const convertCategory = (
    formCategory: FormCategory,
    indexOfCategory: number
  ) => {
    const category: SpentsTableCategory = {
      key: indexOfCategory,
      name: formCategory.name,
      date: "Дата",
      spent: "Потрачено",
      actionButtons: <Actions indexOfCategory={indexOfCategory} />,
      items: [],
    };
    return category;
  };

  const convertCategoryItem = (
    formItem: FormCategoryItem,
    indexOfCategory: number,
    indexOfItemInCategory: number
  ): SpentsTableCategoryItem => {
    const { date, name, spent } = formItem;
    const categoryItem: SpentsTableCategoryItem = {
      name: name,
      date: date,
      spent: Number(spent).toFixed(2) + " " + CURRENCY_BYN,
      key: indexOfItemInCategory,
      actionButtons: (
        <DeleteButton
          indexOfCategory={indexOfCategory}
          indexOfItemInCategory={indexOfItemInCategory}
        />
      ),
    };
    return categoryItem;
  };

  const convertFormToTable = (
    spentsData: FormCategory[]
  ): SpentsTableCategory[] => {
    const convertedData: SpentsTableCategory[] = [];
    spentsData.forEach((formCategory, indexOfCategory) => {
      const tableCategory = convertCategory(formCategory, indexOfCategory);

      formCategory.items.forEach((formCategoryItem, indexOfItemInCategory) => {
        const tableCategoryItem = convertCategoryItem(
          formCategoryItem,
          indexOfCategory,
          indexOfItemInCategory
        );
        tableCategory.items.push(tableCategoryItem);
      });

      convertedData.push(tableCategory);
    });

    return convertedData;
  };

  React.useEffect(() => {
    const convertedData = convertFormToTable(spentsData);
    setTableData([...convertedData]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spentsData]);

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
      dataIndex: "actionButtons",
      key: "actionButtons",
      width: "1%",
    },
  ];

  return (
    <div className={styles.margin}>
      <Table
        expandable={{ childrenColumnName: "items" }}
        className={styles.TableStyles}
        showHeader={false}
        dataSource={tableData}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};
