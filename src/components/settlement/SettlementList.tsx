import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import dateFormat from '../../utils/dateFormat';
import PageButtons from '../pagination/PageButtons';
import { useState } from 'react';
import { SettlementListRequest } from '../../types/Settlement';
import useFetchSettlementList from '../../hooks/useFetchSettlementList';

const SettlementList = () => {
  const [param, setParam] = useState<SettlementListRequest>({
    number: 1,
    size: 10,
    start: null,
    end: null,
  });
  const { data } = useFetchSettlementList(param);

  const [period, setPeriod] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  const handleChangePeriod = (dates: [Date | null, Date | null]) => {
    setPeriod([...dates]);
    if (!!dates[0] === !!dates[1]) {
      setParam((prev) => ({
        ...prev,
        number: 1,
        start: dates[0],
        end: dates[1]
          ? new Date(dates[1].getFullYear(), dates[1].getMonth() + 1, 0)
          : null,
      }));
    }
  };

  const setPage = (page: number) => {
    setParam((prev) => ({ ...prev, number: page }));
  };

  return (
    <>
      <form className="mt-2 flex items-center justify-center gap-3 py-3">
        <FontAwesomeIcon icon={faCalendar} size="lg" />
        <DatePicker
          startDate={period[0]}
          endDate={period[1]}
          onChange={handleChangePeriod}
          locale={ko}
          dateFormat="yyyy.MM"
          selectsRange
          isClearable
          showMonthYearPicker
          customInput={<input className="input-primary w-52 text-center" />}
        />
      </form>
      <table className="w-full table-fixed text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-3">일자</th>
            <th className="px-3 py-3">지급 금액</th>
            <th className="px-3 py-3">상태</th>
          </tr>
        </thead>
        <tbody>
          {data?.content.map((item) => (
            <tr
              key={item.id}
              className="border-b border-slate-200 odd:bg-white even:bg-slate-50"
            >
              <td className="px-3 py-3">
                {dateFormat(item.createdAt, 'YYYY-MM-DD')}
              </td>
              <td className="px-3 py-3">{item.amount.toLocaleString()}원</td>
              <td className="px-3 py-3">
                {item.status === 'COMPLETE' && (
                  <span className="rounded bg-green-100 px-1.5 py-1 text-xs text-green-700">
                    정산완료
                  </span>
                )}

                {item.status === 'SCHEDULED' && (
                  <span className="rounded bg-sky-100 px-1.5 py-1 text-xs text-sky-700">
                    정산예정
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PageButtons pagination={data} paginate={setPage} />
    </>
  );
};

export default SettlementList;
