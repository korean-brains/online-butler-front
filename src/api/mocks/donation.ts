import { USE_MOCK } from "../../constants/api";
import { mockAdapter } from "../axiosInstance";

if (USE_MOCK) {
  mockAdapter.onPost("/donation").reply(200);
}
