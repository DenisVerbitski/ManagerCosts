import { ReactElement } from "react";
import TableItem from "./TableItem";

export default interface TableCategory {
  key: number;
  name: string;
  date: string;
  spent: string;
  actions: ReactElement;
  children: Array<TableItem>;
}
