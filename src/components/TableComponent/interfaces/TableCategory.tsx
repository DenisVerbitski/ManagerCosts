import { ReactElement } from "react";
import TableCategoryItem from "./TableCategoryItem";

export default interface TableCategory {
  key: number;
  name: string;
  date: string;
  spent: string;
  actions: ReactElement;
  children: TableCategoryItem[];
}
