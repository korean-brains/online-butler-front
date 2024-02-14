import { USE_MOCK } from "../../constants/api";
import { DonationList } from "../../types/Donation";
import { ScrollResponse } from "../../types/Scroll";
import { mockAdapter } from "../axiosInstance";

if (USE_MOCK) {
  const data: ScrollResponse<DonationList> = {
    contents: [
      {
        createdAt: new Date("2024-02-14T17:00"),
        nickname: "부자집사",
        amount: 100000,
      },
      {
        createdAt: new Date("2024-02-14T17:00"),
        nickname: "부자집사",
        amount: 100000,
      },
      {
        createdAt: new Date("2024-02-14T17:00"),
        nickname: "부자집사",
        amount: 100000,
      },
      {
        createdAt: new Date("2024-02-14T17:00"),
        nickname: "부자집사",
        amount: 100000,
      },
    ],
    nextCurosr: 3,
  };
  mockAdapter.onGet("/donation/list").reply(200, data);
}
