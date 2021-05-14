import { ReactElement } from "react";

import SpentsTableCategoryItem from "./SpentsTableCategoryItem";

export default interface SpentsTableCategory {
  key: number;
  name: string;
  date: string;
  spent: string;
  actionButtons: ReactElement;
  items: SpentsTableCategoryItem[];
}
