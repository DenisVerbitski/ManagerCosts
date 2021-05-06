import FormCategory from "../components/Modal/CategoryModal/interfaces/FormCategory";
import { RootState } from "./store";

export const selectSpentsData = (state: RootState): FormCategory[] =>
  state.spentsDataReducer.data;
