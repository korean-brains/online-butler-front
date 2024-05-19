import useFetchMembers from '../../hooks/useFetchMembers';
import useIntersect from '../../hooks/useIntersect';
import { useMemo } from 'react';
import SearchMemberListItem from './SearchMemberListItem';

interface SearchMemberListProps {
  name: string;
}

const SearchMemberList = ({ name }: SearchMemberListProps) => {
  const { data, isFetching, hasNextPage, fetchNextPage } =
    useFetchMembers(name);

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
        <SearchMemberListItem key={item.id} member={item} />
      ))}
      <div className="h-3" ref={ref}></div>
    </div>
  );
};

export default SearchMemberList;
