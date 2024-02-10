import { Post } from "../../types/Post";
import butlerApi from "../axiosInstance";

const getPost = async () => {
  const { data } = await butlerApi.get<Post[]>("/post");
  return data;
};
export default getPost;
