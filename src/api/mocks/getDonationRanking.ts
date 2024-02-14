import { USE_MOCK } from "../../constants/api";
import { DonationRanking } from "../../types/Donation";
import { ScrollResponse } from "../../types/Scroll";
import { mockAdapter } from "../axiosInstance";

if (USE_MOCK) {
  const data: ScrollResponse<DonationRanking> = {
    contents: [
      {
        rank: 1,
        nickname: "부자집사",
        amount: 100000,
      },
      {
        rank: 2,
        nickname: "덜부자집사",
        amount: 20000,
      },
      {
        rank: 3,
        nickname: "거지집사",
        amount: 3000,
      },
    ],
    nextCurosr: 3,
  };
  mockAdapter.onGet("/donation/ranking").reply(200, data);
}
