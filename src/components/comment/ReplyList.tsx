import Reply from './Reply';

const ReplyList = () => {
  return (
    <div className="flex flex-col">
      <div className="flex max-h-[450px] flex-col gap-5 overflow-y-scroll scrollbar-hide">
        <Reply />
        <Reply />
        <Reply />
      </div>
    </div>
  );
};

export default ReplyList;
