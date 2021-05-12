import { RootState } from "../store";
import FormCategory from "../components/Modal/CategoryModal/interfaces/FormCategory";

export const selectSpentsData = (state: RootState): FormCategory[] =>
  state.spentsDataReducer.spentsData;
