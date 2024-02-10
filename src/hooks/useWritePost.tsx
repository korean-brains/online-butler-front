import { useState } from "react";
import { PostWriteRequest } from "../types/Post";
import butlerApi from "../api/axiosInstance";

const useWritePost = () => {
  const [param, setParam] = useState<PostWriteRequest>({
    caption: "",
    tags: [],
    images: [],
  });

  const submit = async () => {
    await butlerApi.post("/post", {
      param,
    });
  };

  return { param, setParam, submit };
};

export default useWritePost;
