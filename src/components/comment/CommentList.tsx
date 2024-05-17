import Comment from './Comment';
import useFetchComments from '../../hooks/useFetchComments';
import useIntersect from '../../hooks/useIntersect';
import { useMemo } from 'react';
import useWriteComment from '../../hooks/useWriteComment';

interface CommentListProps {
  postId: number;
}

const CommentList = ({ postId }: CommentListProps) => {
  const { data, hasNextPage, isFetching, fetchNextPage, refetch } =
    useFetchComments({
      postId: postId,
      size: 10,
    });

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const comments = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data.content) : []),
    [data],
  );

  const { param, onChangeText, submit } = useWriteComment(postId);

  const handleCommentSubmit = async () => {
    try {
      await submit();
      refetch();
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex max-h-[450px] flex-col gap-5 overflow-y-scroll scrollbar-hide">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
        {isFetching && (
          <img
            alt="loading"
            src="/images/spinner.gif"
            className="mx-auto my-[-25px] w-16"
          />
        )}
        <div ref={ref} className="mt-[-100px]"></div>
      </div>

      <div className="mt-4 flex gap-2">
        <input
          className="input-primary flex-grow"
          placeholder="댓글 달기"
          id="text"
          name="text"
          value={param.text}
          onChange={onChangeText}
        />
        <button className="btn-primary" onClick={handleCommentSubmit}>
          게시
        </button>
      </div>
    </div>
  );
};

export default CommentList;
