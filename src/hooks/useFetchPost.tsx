import { useQuery } from "react-query";
import butlerApi from "../api/axiosInstance";
import { Post } from "../types/Post";

const useFetchPost = (id: number) => {
  return useQuery(["post", id], async () => {
    const response = await butlerApi.get<Post>(`/post/${id}`);
    return response.data;
  });
};

export default useFetchPost;
