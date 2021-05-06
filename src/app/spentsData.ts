import { createSlice } from "@reduxjs/toolkit";
import FormCategory from "../components/Modal/CategoryModal/interfaces/FormCategory";

export interface SpentsDataState {
  data: FormCategory[];
}

const initialState: SpentsDataState = {
  data: [],
};

export const spentsDataSlice = createSlice({
  name: "spentsData",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      if (action.payload.items === undefined) {
        action.payload.items = [];
      }
      state.data.push(action.payload);
    },
    deleteCategory: (state, action) => {
      state.data.splice(action.payload, 1);
    },
    addItemToCategory: (state, action) => {
      state.data[action.payload.indexOfCategory].items.push(
        action.payload.itemToAdd
      );
    },
    deleteItemFromCategory: (state, action) => {
      state.data[action.payload.indexOfCategory].items.splice(
        action.payload.indexOfItemInCategory,
        1
      );
    },
  },
});

export const {
  addCategory,
  deleteCategory,
  addItemToCategory,
  deleteItemFromCategory,
} = spentsDataSlice.actions;
export default spentsDataSlice.reducer;
