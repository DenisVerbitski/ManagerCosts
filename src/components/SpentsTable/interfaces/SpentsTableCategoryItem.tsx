import { ReactElement } from "react";

export default interface SpentsTableCategoryItem {
  key: number;
  actionButtons: ReactElement;
  name: string;
  date: string;
  spent: string;
}
