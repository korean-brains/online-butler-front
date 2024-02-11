import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { API_HOST, USE_MOCK } from "../constants/api";

const butlerApi = axios.create({
  baseURL: API_HOST,
});

export const mockAdapter = new MockAdapter(butlerApi);
if (!USE_MOCK) {
  mockAdapter.restore();
}
export default butlerApi;
