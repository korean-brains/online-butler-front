const RankingList = () => {
  return (
    <table className="w-full table-fixed text-left">
      <thead className="bg-gray-50">
        <tr>
          <th className="w-20 px-6 py-3">등수</th>
          <th className="px-6 py-3">대상</th>
          <th className="px-6 py-3">후원 금액</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-slate-200 odd:bg-white even:bg-slate-50">
          <td className="break-words px-6 py-3">1</td>
          <td className="break-words px-6 py-3">
            고먐미aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaakjscnakjsbkjasbf
          </td>
          <td className="break-words px-6 py-3">1만원</td>
        </tr>
      </tbody>
    </table>
  );
};

export default RankingList;
