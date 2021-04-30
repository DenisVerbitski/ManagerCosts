import { ReactElement } from "react";
import ITableGroupElement from "./ITableGroupElement";

export default interface ITableElement {
  key: number;
  name: string;
  date: string;
  spent: string;
  actions: ReactElement;
  children: Array<ITableGroupElement>;
}
