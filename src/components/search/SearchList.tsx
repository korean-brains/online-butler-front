import { useParams } from 'react-router-dom';
import useFetchMembers from '../../hooks/useFetchMembers';
import useIntersect from '../../hooks/useIntersect';
import { useMemo } from 'react';
import SearchMemberList from './SearchMemberList';

const SearchList = () => {
  const params = useParams();
  const { data, isFetching, hasNextPage, fetchNextPage } = useFetchMembers(
    params.query!,
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
    <div>
      {items.map((item) => (
        <SearchMemberList member={item} />
      ))}
      <div className="h-3" ref={ref}></div>
    </div>
  );
};

export default SearchList;
