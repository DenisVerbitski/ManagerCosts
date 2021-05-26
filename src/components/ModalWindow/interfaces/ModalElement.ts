import ModalFieldType from "./ModalFieldType";

export default interface ModalElement {
  name: string;
  type: ModalFieldType;
  label: string;
  placeholder: string;
  dataType?: "text" | "number";
  defaultFocus?: boolean;
  key?: number;
}
