import { createSlice } from "@reduxjs/toolkit";
import FormCategory from "../components/Modal/CategoryModal/interfaces/FormCategory";
import FormCategoryItem from "../components/Modal/ItemModal/interfaces/FormCategoryItem";

export interface SpentsDataState {
  spentsData: FormCategory[];
}

const initialState: SpentsDataState = {
  spentsData: [],
};

export const spentsDataSlice = createSlice({
  name: "spentsData",
  initialState,
  reducers: {
    addCategory: (
      state,
      action: {
        type: string;
        payload: FormCategory;
      }
    ) => {
      if (!action.payload.items) {
        action.payload.items = [];
      }
      state.spentsData.push(action.payload);
    },
    deleteCategory: (
      state,
      action: {
        type: string;
        payload: number;
      }
    ) => {
      state.spentsData.splice(action.payload, 1);
    },
    addItemToCategory: (
      state,
      action: {
        type: string;
        payload: {
          indexOfCategory: number;
          itemToAdd: FormCategoryItem;
        };
      }
    ) => {
      state.spentsData[action.payload.indexOfCategory].items.push(
        action.payload.itemToAdd
      );
    },
    deleteItemFromCategory: (
      state,
      action: {
        type: string;
        payload: {
          indexOfCategory: number;
          indexOfItemInCategory: number;
        };
      }
    ) => {
      state.spentsData[action.payload.indexOfCategory].items.splice(
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
