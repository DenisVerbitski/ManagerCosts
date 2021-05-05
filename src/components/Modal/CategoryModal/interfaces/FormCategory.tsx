import FormCategoryItem from "../../ItemModal/interfaces/FormCategoryItem";

export default interface FormCategory {
  name: string;
  children: FormCategoryItem[];
}
