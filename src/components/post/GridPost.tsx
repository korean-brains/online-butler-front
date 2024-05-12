import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchWrittenPosts from '../../hooks/useFetchWrittenPosts';
import useIntersect from '../../hooks/useIntersect';
import serverUrl from '../../utils/serverUrl';
import useFetchLikePosts from '../../hooks/useFetchLikePosts';

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
      {tab == 'write' && <WriteGrid id={id} />}
      {tab == 'like' && <LikeGrid id={id} />}
    </div>
  );
};

interface GridProps {
  id: number;
}

const WriteGrid = ({ id }: GridProps) => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useFetchWrittenPosts(
    id,
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
    () => (data ? data.pages.flatMap(({ data }) => data.content) : []),
    [data],
  );

  return (
    <div className="grid grid-cols-3 gap-1 p-1">
      {items.map((item) => (
        <Link to={`/post/${item.id}`} key={item.id}>
          <img
            src={serverUrl(item.images[0])}
            alt="thumbnail"
            className="aspect-square object-cover"
          />
        </Link>
      ))}
      <div ref={ref}></div>
    </div>
  );
};

const LikeGrid = ({ id }: GridProps) => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useFetchLikePosts(
    id,
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
    () => (data ? data.pages.flatMap(({ data }) => data.content) : []),
    [data],
  );

  return (
    <div className="grid grid-cols-3 gap-1 p-1">
      {items.map((item) => (
        <Link to={`/post/${item.id}`} key={item.id}>
          <img
            src={serverUrl(item.images[0])}
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
