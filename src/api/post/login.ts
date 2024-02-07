import { Authentication } from "../../types/Authentication";
import butlerApi from "../axiosInstance";

const login = async (username: string, password: string) => {
  const { data } = await butlerApi.post<Authentication>("/login", {
    username,
    password,
  });

  return data;
};

export default login;
