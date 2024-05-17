import { Comment as CommentType } from '../../types/Comment';
import serverUrl from '../../utils/serverUrl';
import timeForToday from '../../utils/timeForToday';
import ReplyList from './ReplyList';

interface CommentProps {
  comment: CommentType;
}

const Comment = ({ comment }: CommentProps) => {
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
          <button className="font-semibold">답글 보기</button>
          <button className="font-semibold">답글 달기</button>
        </div>
        <div className="mt-2">{/*<ReplyList />*/}</div>
      </div>
    </div>
  );
};

export default Comment;
