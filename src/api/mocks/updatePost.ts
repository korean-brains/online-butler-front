import { USE_MOCK } from "../../constants/api";
import { mockAdapter } from "../axiosInstance";

if (USE_MOCK) {
  mockAdapter.onPatch("/post").reply(200);
}
