import { createSlice } from "@reduxjs/toolkit";

const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";

const initialState = {
  currentUser: {},
  isAuth: true,
};
export const addUser = createSlice({
  name: "CreateUser",
  initialState,
  reducers: {
    userReducer: (state, action) => {
      switch (action.type) {
        case SET_USER:
          return {
            ...state,
            currentUser: action.payload.user,
            isAuth: true,
          };
        case LOGOUT:
          localStorage.removeItem("token");
          return {
            ...state,
            currentUser: {},
            isAuth: false,
          };
        default:
          return state;
      }
    },
  },
});

 export const setUser = (user: any) => ({ type: SET_USER, payload: user });
 export const logOut = () => ({ type: LOGOUT });

export const {userReducer} = addUser.actions
export default addUser.reducer
