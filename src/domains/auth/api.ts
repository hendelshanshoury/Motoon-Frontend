import axios from "axios";
import { UserFormValues, UserLoginValue } from "./types";

export const registerUser = (values: UserFormValues) => {
  return axios.post("https://motoon.ammarelgendy.com/api/register", values);
};
export const loginUser = (values: UserLoginValue) => {
  return axios.post("https://motoon.ammarelgendy.com/api/login", values);
};
