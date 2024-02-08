import { MemberPostItem } from "../../types/Post";
import butlerApi from "../axiosInstance";

const getMemberPosts = async (id: number) => {
  const { data } = await butlerApi.get<MemberPostItem[]>(`/member/${id}/posts`);
  return data;
};
export default getMemberPosts;
