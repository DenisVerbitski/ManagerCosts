import { ReactElement } from "react";

export default interface ITableGroupElement {
  key: number;
  name: string;
  date: string;
  spent: string;
  actions: ReactElement;
}
