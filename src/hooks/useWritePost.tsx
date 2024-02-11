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
    const formData = new FormData();
    formData.append(
      "post",
      new Blob([JSON.stringify({ caption: param.caption, tags: param.tags })], {
        type: "application/json",
      }),
    );
    param.images.forEach((image) => formData.append("images", image));

    const response = await butlerApi.post("/post", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  };

  return { param, setParam, submit };
};

export default useWritePost;
