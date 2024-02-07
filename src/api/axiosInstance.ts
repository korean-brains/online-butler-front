import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { API_HOST } from "../constants/api";

const butlerApi = axios.create({
  baseURL: API_HOST,
});

export const mockAdapter = new MockAdapter(butlerApi);
export default butlerApi;
