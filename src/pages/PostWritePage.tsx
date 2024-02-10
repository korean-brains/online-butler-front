import { useState } from "react";
import HeaderBack from "../components/header/HeaderBack";
import { PostWriteRequest } from "../types/Post";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

const PostWritePage = () => {
  const [param, setParam] = useState<PostWriteRequest>({
    caption: "",
    tags: [],
    images: [],
  });
  const [tag, setTag] = useState<string>("");
  const [previewImage, setPreviewImage] = useState<any[]>([]);

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const images = Array.from(event.target.files);
      setParam((param) => ({
        ...param,
        images: [...param.images, ...images],
      }));

      images.forEach((image) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setPreviewImage((prev) => [...prev, fileReader.result]);
        };
        fileReader.readAsDataURL(image);
      });
    }
  };

  const onChangeCaption = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setParam((param) => ({
      ...param,
      caption: event.target.value,
    }));
  };

  const onChangeTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value.trim()); // 띄어쓰기 방지 trim()
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      tag.length !== 0 &&
      event.key === "Enter" &&
      !param.tags.includes(tag)
    ) {
      setParam((param) => ({
        ...param,
        tags: [...param.tags, tag],
      }));
      setTag("");
    }
  };

  const onClickDeleteTag = (tag: string) => {
    setParam((param) => ({
      ...param,
      tags: [...param.tags.filter((param) => param !== tag)],
    }));
  };

  return (
    <>
      <HeaderBack title="포스팅">
        <button className="btn-primary px-6">완료</button>
      </HeaderBack>
      <div className="mt-8 flex w-full flex-col gap-5 px-5 pb-8">
        <div>
          <div className="flex snap-x snap-mandatory items-center gap-2 overflow-x-scroll md:scrollbar-hide">
            {previewImage.map((preview) => (
              <img
                src={preview}
                alt="preview"
                className="aspect-square w-[80%] snap-center snap-always rounded-lg object-cover"
              />
            ))}
            <label
              htmlFor="images"
              className="mx-12 cursor-pointer snap-center snap-always"
            >
              <FontAwesomeIcon icon={faSquarePlus} size="8x" />
            </label>
          </div>

          <input
            id="images"
            name="images"
            type="file"
            multiple
            accept="image/*"
            onChange={onChangeImage}
            className="hidden"
          />
        </div>
        <div>
          <label htmlFor="caption">내용</label>
          <textarea
            id="caption"
            name="caption"
            value={param.caption}
            onChange={onChangeCaption}
            rows={4}
            className="input-primary mt-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="tag">태그</label>
          <input
            id="tag"
            name="tag"
            type="text"
            placeholder="엔터키를 입력하여 태그를 추가하세요"
            value={tag}
            onChange={onChangeTag}
            onKeyDown={onKeyDown}
            className="input-primary mt-2 w-full"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {param?.tags?.map((tag) => (
            <span className="rounded-full bg-indigo-100 px-3 py-1">
              {tag}
              <button className="ms-2" onClick={() => onClickDeleteTag(tag)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostWritePage;
