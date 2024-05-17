import Reply from './Reply';
import useFetchReplies from '../../hooks/useFetchReplies';
import { useMemo } from 'react';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ReplyListProps {
  commentId: number;
}

const ReplyList = ({ commentId }: ReplyListProps) => {
  const { data, hasNextPage, fetchNextPage, isFetching } = useFetchReplies({
    commentId: commentId,
    size: 5,
  });

  const replies = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data.content) : []),
    [data],
  );

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5">
        {replies.map((reply) => (
          <Reply key={reply.id} reply={reply} />
        ))}

        {isFetching && (
          <img
            alt="loading"
            src="/images/spinner.gif"
            className="mx-auto w-16"
          />
        )}

        {hasNextPage && !isFetching && (
          <button onClick={() => fetchNextPage()}>
            <FontAwesomeIcon icon={faSquarePlus} size="xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ReplyList;
