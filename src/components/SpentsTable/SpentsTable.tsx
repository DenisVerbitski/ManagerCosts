import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Empty, Table } from "antd";

import { selectSpentsData } from "../../selectors/spentsData";
import DeleteButton from "./Actions/DeleteButton/DeleteButton";
import Actions from "./Actions/Actions";
import FormCategoryItem from "../CategoryItemModal/interfaces/FormCategoryItem";
import FormCategory from "../CategoryModal/interfaces/FormCategory";
import SpentsTableCategoryItem from "./interfaces/SpentsTableCategoryItem";
import SpentsTableCategory from "./interfaces/SpentsTableCategory";

import styles from "./SpentsTable.less";

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
        <div className={styles.itemDeleteButton}>
          <DeleteButton
            indexOfCategory={indexOfCategory}
            indexOfItemInCategory={indexOfItemInCategory}
          />
        </div>
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
  let locale = {
    emptyText: (
      <Empty
        image="https://img.icons8.com/ios/452/file--v1.png"
        imageStyle={{
          height: 80,
        }}
        description={
          <span>
            Нет расходов
          </span>
        }
      />
    ),
  };
  return (
    <div className={styles.margin}>
      <Table
        locale={locale}
        expandable={{
          childrenColumnName: "items",
        }}
        className={styles.TableStyles}
        showHeader={false}
        dataSource={tableData}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};
