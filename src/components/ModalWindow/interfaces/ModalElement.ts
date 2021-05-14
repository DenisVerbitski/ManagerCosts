export default interface ModalElement {
  name: string;
  type: "input" | "inputNumber" |"datePicker";
  label: string;
  placeholder: string;
  dataType?: "text" | "number";
  defaultFocus?: boolean;
}
