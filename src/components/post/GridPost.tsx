import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchMemberPosts from '../../hooks/useFetchMemberPosts';
import useIntersect from '../../hooks/useIntersect';

interface GridPostProps {
  id: number;
}

const GridPost = ({ id }: GridPostProps) => {
  const [tab, setTab] = useState<string>('write');
  const handleWriteTab = () => {
    setTab('write');
  };
  const handleLikeTab = () => {
    setTab('like');
  };

  return (
    <div>
      <div className="sticky top-0 z-10 flex h-10 bg-white">
        <button
          className={`flex-grow ${tab === 'write' ? 'border-b-2 border-gray-950' : ''}`}
          onClick={handleWriteTab}
        >
          작성글
        </button>
        <button
          className={`flex-grow ${tab === 'like' ? 'border-b-2 border-gray-950' : ''}`}
          onClick={handleLikeTab}
        >
          좋아요한 글
        </button>
      </div>
      <Grid id={id} type={tab} />
    </div>
  );
};

interface GridProps {
  id: number;
  type: string;
}

const Grid = ({ id, type }: GridProps) => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useFetchMemberPosts(
    id,
    type,
    {
      size: 10,
    },
  );

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const items = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data.contents) : []),
    [data],
  );

  return (
    <div className="grid grid-cols-3 gap-1 p-1">
      {items.map((item) => (
        <Link to={`/post/${item.id}`} key={item.id}>
          <img
            src={item.thumbnail}
            alt="thumbnail"
            className="aspect-square object-cover"
          />
        </Link>
      ))}
      <div ref={ref}></div>
    </div>
  );
};

export default GridPost;
