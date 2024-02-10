import { mockAdapter } from "../axiosInstance";
import { USE_MOCK } from "../../constants/api";
import { ScrollResponse } from "../../types/Scroll";
import { Post } from "../../types/Post";

if (USE_MOCK) {
  const data: ScrollResponse<Post> = {
    contents: [
      {
        id: 1,
        createdAt: "2024-02-04T18:00:00",
        description:
          "게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용게시글 내용 게시글 내용게시글 내용게시글 내용게시글 내용게시글 내용 게시글 내용",
        images: ["/images/cat.jpg", "/images/cat.jpg"],
        likeNum: 1200,
        commentNum: 10,
        member: {
          id: 1,
          profile: "/images/profile.jpg",
          nickname: "닉네임",
          followed: false,
        },
        tags: [
          { id: 1, name: "고양이" },
          { id: 2, name: "뚱냥이" },
        ],
      },
    ],
    nextCurosr: null,
  };
  mockAdapter.onGet("/post").reply(200, data);
}
