import { configureStore } from "@reduxjs/toolkit";
import spentsDataReducer from "./reducers/spentsData";
import { loadState, saveState } from "./localstorage";
import  userReducer from "./reducers/User.reduser"


export const store = configureStore({
  reducer:{
    spentsDataReducer,
    userReducer,
  },
  preloadedState: loadState(),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

store.subscribe(() => saveState(store.getState()));
