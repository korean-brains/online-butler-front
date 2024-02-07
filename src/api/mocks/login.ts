import { mockAdapter } from "../axiosInstance";
import { USE_MOCK } from "../../constants/api";

if (USE_MOCK) {
  mockAdapter.onPost("/login").reply(200, { id: 1 });
}
