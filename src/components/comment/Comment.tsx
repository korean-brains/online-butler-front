import { Comment as CommentType } from '../../types/Comment';
import serverUrl from '../../utils/serverUrl';
import timeForToday from '../../utils/timeForToday';
import ReplyList from './ReplyList';
import { useState } from 'react';
import useWriteReply from '../../hooks/useWriteReply';

interface CommentProps {
  comment: CommentType;
}

const Comment = ({ comment }: CommentProps) => {
  const [isOpenReplyList, setIsOpenReplyList] = useState<boolean>(false);
  const [isOpenReplyInput, setIsOpenReplyInput] = useState<boolean>(false);
  const { param, onChangeText, submit, clearParam } = useWriteReply(comment.id);

  const handleReplySubmit = async () => {
    try {
      await submit();
      setIsOpenReplyInput(false);
      setIsOpenReplyList(true);
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div className="flex">
      <img
        alt="profile"
        src={
          (comment.profile && serverUrl(comment.profile)) ||
          '/images/default-profile.png'
        }
        className="aspect-square h-8 rounded-full object-cover"
      />
      <div className="ms-2 flex flex-col text-xs">
        <div>
          <span className="me-1 font-semibold">{comment.author}</span>
          {comment.text}
        </div>
        <div className="mt-1 flex gap-2 text-gray-500">
          <span>{timeForToday(comment.createdAt)}</span>
          <button
            className="font-semibold"
            onClick={() => {
              setIsOpenReplyList((prev) => !prev);
            }}
          >
            {isOpenReplyList ? '답글 숨기기' : '답글 보기'}
          </button>
          <button
            className="font-semibold"
            onClick={() => {
              setIsOpenReplyInput((prev) => {
                clearParam();
                return !prev;
              });
            }}
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
            <button className="btn-primary" onClick={handleReplySubmit}>
              게시
            </button>
          </div>
        )}

        {isOpenReplyList && (
          <div className="mt-2">
            <ReplyList commentId={comment.id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
