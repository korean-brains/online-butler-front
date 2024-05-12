import { useContext, useMemo } from 'react';
import useFetchDonationRanking from '../../hooks/useFetchDonationRanking';
import useIntersect from '../../hooks/useIntersect';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

const RankingList = () => {
  const { authentication } = useContext(AuthenticationContext);
  const { data, hasNextPage, isFetching, fetchNextPage } =
    useFetchDonationRanking(authentication!.id);

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
    <>
      <table className="w-full table-fixed text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className="w-20 px-6 py-3">등수</th>
            <th className="px-6 py-3">대상</th>
            <th className="px-6 py-3">후원 금액</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr className="border-b border-slate-200 odd:bg-white even:bg-slate-50">
              <td className="break-words px-6 py-3">{item.rank}</td>
              <td className="break-words px-6 py-3">{item.nickname}</td>
              <td className="break-words px-6 py-3">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div ref={ref} className="h-3"></div>
    </>
  );
};

export default RankingList;
