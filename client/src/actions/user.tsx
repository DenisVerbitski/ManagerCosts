import axios from "axios";
import { setUser } from "../reducers/User.reduser";
import { message } from "antd";

export const registration = async (UserName: string, password: string) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/auth/registration`,
      {
        UserName,
        password,
      }
    );
    return message.success(response.data.message, 3);
  } catch (e) {
    return message.error(e.response.data.message, 3);
  }
};

export const login = (UserName: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/login`,
        {
          UserName,
          password,
        }
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);

      console.log(response.data.user);
      return message.success("Вы успешно авторизовались", 3);
    } catch (e) {
      return message.error(e.response.data.message, 3);
    }
  };
};

// export const auth = () => {
//   return async (dispatch: any) => {
//     try {
//       const response = await axios.post(`http://localhost:5000/api/auth/auth`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       dispatch(setUser(response.data.user));
//       localStorage.setItem("token", response.data.token);
//     } catch (e) {
//       localStorage.removeItem("token");
//       return message.error(e.response.data.message, 3);
//     }
//   };
// };
