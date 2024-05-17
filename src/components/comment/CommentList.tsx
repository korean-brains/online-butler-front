import Comment from './Comment';
import useFetchComments from '../../hooks/useFetchComments';
import useIntersect from '../../hooks/useIntersect';
import { useMemo } from 'react';

interface CommentListProps {
  postId: number;
}

const CommentList = ({ postId }: CommentListProps) => {
  const { data, isLoading, hasNextPage, isFetching, fetchNextPage } =
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

  return (
    <div className="flex flex-col">
      <div className="flex max-h-[450px] flex-col gap-5 overflow-y-scroll scrollbar-hide">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <input className="input-primary flex-grow" placeholder="댓글 달기" />
        <button className="btn-primary">게시</button>
      </div>
    </div>
  );
};

export default CommentList;
