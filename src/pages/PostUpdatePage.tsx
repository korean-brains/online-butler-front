import { faXmark } from '@fortawesome/free-solid-svg-icons';
import HeaderBack from '../components/header/HeaderBack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchPost from '../hooks/useFetchPost';
import useUpdatePost from '../hooks/useUpdatePost';
import { useEffect, useState } from 'react';
import serverUrl from '../utils/serverUrl';

const PostUpdatePage = () => {
  const { id } = useParams();
  const { isLoading, data: post } = useFetchPost(parseInt(id!));
  const { param, setParam, onChangeCaption, deleteTag, submit } = useUpdatePost(
    parseInt(id!),
  );
  const [tag, setTag] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && post) {
      setParam({
        caption: post.caption,
        tags: post.tags ? [...post.tags] : [],
      });
    }
  }, [isLoading, post, setParam]);

  const onChangeTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value.trim()); // 띄어쓰기 방지 trim()
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      tag.length !== 0 &&
      event.key === 'Enter' &&
      !param.tags.includes(tag)
    ) {
      setParam((param) => ({
        ...param,
        tags: [...param.tags, tag],
      }));
      setTag('');
    }
  };

  const onSubmit = async () => {
    try {
      await submit();
      navigate(-1);
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <>
      <HeaderBack title="포스트 수정">
        <button className="btn-primary px-6" onClick={onSubmit}>
          완료
        </button>
      </HeaderBack>
      <div className="mt-8 flex w-full flex-col gap-5 px-5 pb-8">
        <div>
          <div className="flex snap-x snap-mandatory items-center gap-2 overflow-x-scroll md:scrollbar-hide">
            {post?.images.map((image, i) => (
              <img
                key={i}
                src={serverUrl(image)}
                alt="preview"
                className="aspect-square w-[80%] snap-center snap-always rounded-lg object-cover"
              />
            ))}
          </div>
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
            value={tag}
            onChange={onChangeTag}
            onKeyDown={onKeyDown}
            placeholder="엔터키를 입력하여 태그를 추가하세요"
            className="input-primary mt-2 w-full"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {param.tags.map((tag, i) => (
            <span key={i} className="rounded-full bg-indigo-100 px-3 py-1">
              {tag}
              <button className="ms-2" onClick={() => deleteTag(tag)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostUpdatePage;
