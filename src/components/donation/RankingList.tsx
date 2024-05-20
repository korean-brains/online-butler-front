import { useState } from 'react';
import useFetchDonationRanking from '../../hooks/useFetchDonationRanking';
import { DonationRankingListRequest } from '../../types/Donation';
import PageButtons from '../pagination/PageButtons';

const RankingList = () => {
  const [param, setParam] = useState<DonationRankingListRequest>({
    number: 1,
    size: 10,
  });
  const { data } = useFetchDonationRanking(param);

  const setPage = (pageNumber: number) => {
    setParam((prev) => ({
      ...prev,
      number: pageNumber,
    }));
  };

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
          {data?.content.map((item, i) => (
            <tr
              key={item.id}
              className="border-b border-slate-200 odd:bg-white even:bg-slate-50"
            >
              <td className="break-words px-6 py-3">
                {i + (param.number - 1) * param.size + 1}
              </td>
              <td className="break-words px-6 py-3">{item.name}</td>
              <td className="break-words px-6 py-3">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PageButtons pagination={data} paginate={setPage} />
    </>
  );
};

export default RankingList;
