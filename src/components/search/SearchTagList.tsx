import { useParams } from 'react-router-dom';
import useIntersect from '../../hooks/useIntersect';
import { useMemo } from 'react';
import useFetchTags from '../../hooks/useFetchTags';
import SearchTagListItem from './SearchTagListItem';

const SearchTagList = () => {
  const params = useParams();
  const { data, isFetching, hasNextPage, fetchNextPage } = useFetchTags(
    params.query!,
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
    <div>
      {items.map((item) => (
        <SearchTagListItem key={item.id} tag={item} />
      ))}
      <div className="h-3" ref={ref} />
    </div>
  );
};

export default SearchTagList;
