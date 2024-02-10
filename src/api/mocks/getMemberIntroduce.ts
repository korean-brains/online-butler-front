import { USE_MOCK } from "../../constants/api";
import { mockAdapter } from "../axiosInstance";

if (USE_MOCK) {
  mockAdapter.onGet(/\/member\/.+\/introduce/).reply(200, {
    id: 1,
    profile: "/images/profile.jpg",
    nickname: "닉네임",
    followed: false,
    postNum: 10,
    followerNum: 10,
    folloingNum: 10,
    introduce:
      "자기소개 자기소개 자기소개 자기소개 자기소개 자기소개 자기소개 자기소개 자기소개 ",
  });
}
