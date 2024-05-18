import { Reply as ReplyType } from '../../types/Comment';
import serverUrl from '../../utils/serverUrl';
import timeForToday from '../../utils/timeForToday';
import { useState } from 'react';
import useWriteReply from '../../hooks/useWriteReply';

interface ReplyProps {
  reply: ReplyType;
}

const Reply = ({ reply }: ReplyProps) => {
  const [isOpenReplyInput, setIsOpenReplyInput] = useState<boolean>(false);
  const { param, clearParam, submit, onChangeText } = useWriteReply(
    reply.id,
    reply.rootCommentId,
  );

  const handleReplySubmit = async () => {
    try {
      submit();
      setIsOpenReplyInput(false);
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div className="flex">
      <img
        alt="profile"
        src={
          (reply.profile && serverUrl(reply.profile)) ||
          '/images/default-profile.png'
        }
        className="aspect-square h-8 rounded-full object-cover"
      />
      <div className="ms-2 flex flex-col text-xs">
        <div>
          <span className="me-1 font-semibold">{reply.author}</span>
          <span className="me-1 text-indigo-800">@{reply.parentAuthor}</span>
          {reply.text}
        </div>
        <div className="mt-1 flex gap-2 text-gray-500">
          <span>{timeForToday(reply.createdAt)}</span>
          <button
            className="font-semibold"
            onClick={() =>
              setIsOpenReplyInput((prev) => {
                clearParam();
                return !prev;
              })
            }
          >
            {isOpenReplyInput ? '답글 달기 취소' : '답글 달기'}
          </button>
        </div>

        {isOpenReplyInput && (
          <div className="mt-4 flex gap-2">
            <input
              className="input-primary flex-grow"
              placeholder="댓글 달기"
              id="text"
              name="text"
              value={param.text}
              onChange={onChangeText}
            />
            <button className="btn-primary" onClick={() => handleReplySubmit()}>
              게시
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reply;
