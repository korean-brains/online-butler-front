import { useQuery } from "react-query";
import butlerApi from "../api/axiosInstance";
import { Post } from "../types/Post";

const useFetchPost = (id: number) => {
  return useQuery(["post", id], async () => {
    const response = await butlerApi.get<Post>(`/post/${id}`);
    return response.data;
  });
  // return useInfiniteQuery(
  //   ["Posts"],
  //   ({ pageParam = 0 }: QueryFunctionContext) =>
  //     butlerApi.get<ScrollResponse<Post>>("/post", {
  //       params: { page: pageParam, size: 10 },
  //     }),
  //   {
  //     getNextPageParam: (current: any, all: any) => current,
  //   },
  // );
};

export default useFetchPost;
