import { useState } from 'react';
import { DonationListRequest } from '../../types/Donation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import dateFormat from '../../utils/dateFormat';
import PageButtons from '../pagination/PageButtons';
import useFetchDonationReceiveList from '../../hooks/useFetchDonationReceiveList';

const DonationReceiveList = () => {
  const [param, setParam] = useState<DonationListRequest>({
    number: 1,
    size: 10,
    start: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    end: new Date(),
  });
  const { data } = useFetchDonationReceiveList(param);

  const setPage = (pageNumber: number) => {
    setParam((prev) => ({
      ...prev,
      number: pageNumber,
    }));
  };

  const handleChangeStart = (date: Date) => {
    setParam((prev) => ({
      ...prev,
      start: date,
    }));
  };

  const handleChangeEnd = (date: Date) => {
    setParam((prev) => ({
      ...prev,
      end: date,
    }));
  };

  return (
    <>
      <form className="flex items-center justify-center py-3">
        <FontAwesomeIcon icon={faCalendar} size="lg" />
        <div>
          <DatePicker
            id="start"
            name="start"
            locale={ko}
            dateFormat="yyyy.MM.dd"
            className="input-primary ms-3"
            selected={param.start}
            onChange={handleChangeStart}
          />
        </div>
        <span className="mx-3">~</span>
        <div>
          <DatePicker
            id="end"
            name="end"
            locale={ko}
            dateFormat="yyyy.MM.dd"
            className="input-primary"
            selected={param.end}
            onChange={handleChangeEnd}
          />
        </div>
      </form>
      <table className="w-full table-fixed text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3">일자</th>
            <th className="px-6 py-3">후원금액</th>
            <th className="px-6 py-3">대상</th>
          </tr>
        </thead>
        <tbody>
          {data?.content.map((item) => (
            <tr
              key={item.id}
              className="border-b border-slate-200 odd:bg-white even:bg-slate-50"
            >
              <td className="px-6 py-3">
                <div className="flex flex-col">
                  <span>{dateFormat(item.createdAt, 'YYYY-MM-DD')}</span>
                  <span className="text-sm text-gray-500">
                    {dateFormat(item.createdAt, 'HH:mm')}
                  </span>
                </div>
              </td>
              <td className="px-6 py-3">{item.amount}</td>
              <td className="px-6 py-3">{item.giver}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PageButtons pagination={data} paginate={setPage} />
    </>
  );
};

export default DonationReceiveList;
