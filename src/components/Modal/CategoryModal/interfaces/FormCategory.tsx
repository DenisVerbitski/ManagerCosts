import FormElementData from "../../ItemModal/interfaces/FormItem";

export default interface FormCategory {
  name: string;
  children: Array<FormElementData>;
}
