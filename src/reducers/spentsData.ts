import { createSlice } from "@reduxjs/toolkit";
import FormCategory from "../components/CategoryModal/interfaces/FormCategory";
import FormCategoryItem from "../components/CategoryItemModal/interfaces/FormCategoryItem";

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
        payload: {
          categoryToAdd: FormCategory;
        };
      }
    ) => {
      const categoryToAdd = action.payload.categoryToAdd;
      if (!categoryToAdd.items) {
        categoryToAdd.items = [];
      }
      state.spentsData.push(categoryToAdd);
    },
    deleteCategory: (
      state,
      action: {
        type: string;
        payload: {
          indexOfCategoryToDelete: number;
        };
      }
    ) => {
      state.spentsData.splice(action.payload.indexOfCategoryToDelete, 1);
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
      const { indexOfCategory, itemToAdd } = action.payload;
      state.spentsData[indexOfCategory].items.push(itemToAdd);
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
      const { indexOfCategory, indexOfItemInCategory } = action.payload;
      state.spentsData[indexOfCategory].items.splice(indexOfItemInCategory, 1);
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
