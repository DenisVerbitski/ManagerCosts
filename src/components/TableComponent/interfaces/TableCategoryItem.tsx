import { ReactElement } from "react";

export default interface TableCategoryItem {
  key: number;
  actions: ReactElement;
  name: string;
  date: string;
  spent: string;
}
