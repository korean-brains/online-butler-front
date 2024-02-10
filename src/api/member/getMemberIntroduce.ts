import { MemberIntroduce } from "../../types/Member";
import butlerApi from "../axiosInstance";

const getMemberIntroduce = async (id: number) => {
  const { data } = await butlerApi.get<MemberIntroduce>(
    `/member/${id}/introduce`,
  );

  return data;
};

export default getMemberIntroduce;
