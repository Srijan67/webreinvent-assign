import axios, { AxiosResponse } from "axios";
import { registerUrl, loginUrl, userDetailUrl } from "./api";
import { FormDetail } from "../pages/Signup";
export const registerAction = async (obj: FormDetail) => {
  try {
    let data: AxiosResponse<any> = await axios.post(registerUrl(), obj);
    return data;
  } catch (error: any) {
    console.log(error);
    if (error?.response) {
      // If there is a response from the server, return it
      return error.response;
    }
  }
};
export const loginAction = async (obj: FormDetail) => {
  try {
    let data: AxiosResponse = await axios.post(loginUrl(), obj);
    return data;
  } catch (error: any) {
    console.log(error);
    if (error?.response) {
      // If there is a response from the server, return it
      return error.response;
    }
  }
};
export const userDetailAction = async (id: number) => {
  try {
    let data: AxiosResponse = await axios.get(userDetailUrl(id));
    return data;
  } catch (error: any) {
    console.log(error);
    if (error?.response) {
      // If there is a response from the server, return it
      return error.response;
    }
  }
};
