import { configureStore } from "@reduxjs/toolkit";
import spentsDataReducer from "./spentsData";

export const store = configureStore({
  reducer: {
    spentsDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
