import Post from "../../types/Post";
import useMock from "../../utils/useMock";
import axios, { mockAdapter } from "../axiosInstance";

const getPost = async () => {
  const { data } = await axios.get<Post[]>("/post");
  return data;
};
export default getPost;

if (useMock) {
  mockAdapter.onGet("/post").reply(200, [
    {
      member: {
        id: 1,
        profile: "/images/profile.jpg",
        nickname: "닉네임",
        followed: false,
      },
      post: {
        published: new Date("2024-02-04T18:00:00"),
        description: "게시글 내용",
        media: [
          {
            type: "image",
            src: "/images/cat.jpg",
          },
          {
            type: "image",
            src: "/images/cat.jpg",
          },
        ],
        likeNum: 1200,
        commentNum: 10,
      },
    },
    {
      member: {
        id: 1,
        profile: "/images/profile.jpg",
        nickname: "닉네임",
        followed: false,
      },
      post: {
        published: new Date("2024-02-04T18:00:00"),
        description: "게시글 내용",
        media: [
          {
            type: "image",
            src: "/images/cat.jpg",
          },
          {
            type: "image",
            src: "/images/cat.jpg",
          },
        ],
        likeNum: 1200,
        commentNum: 10,
      },
    },
    {
      member: {
        id: 1,
        profile: "/images/profile.jpg",
        nickname: "닉네임",
        followed: false,
      },
      post: {
        published: new Date("2024-02-04T18:00:00"),
        description: "게시글 내용",
        media: [
          {
            type: "image",
            src: "/images/cat.jpg",
          },
          {
            type: "image",
            src: "/images/cat.jpg",
          },
        ],
        likeNum: 1200,
        commentNum: 10,
      },
    },
  ]);
}
