export default interface ModalElement {
  name: string;
  type: "input" | "datePicker";
  label: string;
  placeholder: string;
  dataType?: "text" | "number";
}
