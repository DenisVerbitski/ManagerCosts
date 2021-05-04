import { ReactElement } from "react";

export default interface TableItem {
  key: number;
  name: string;
  date: string;
  spent: string;
  actions: ReactElement;
}
