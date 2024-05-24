import HeaderBack from '../components/header/HeaderBack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import PageButtons from '../components/pagination/PageButtons';

const SettlementPage = () => {
  return (
    <>
      <HeaderBack title="정산 내역" />
      <div className="p-3">
        <div className="flex flex-col">
          <span className="text-sm">이번달 후원금</span>
          <span className="text-[2rem] font-bold">10,000만원</span>
        </div>
        <form className="mt-5 flex items-center justify-center gap-3 py-3">
          <FontAwesomeIcon icon={faCalendar} size="lg" />
          <DatePicker
            selected={null}
            onChange={(dates) => {}}
            locale={ko}
            dateFormat="yyyy.MM"
            selectsRange
            customInput={<input className="input-primary w-52 text-center" />}
          />
        </form>
        <table className="w-full table-fixed text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3">일자</th>
              <th className="px-6 py-3">지급 금액</th>
              <th className="px-6 py-3">상태</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-200 odd:bg-white even:bg-slate-50">
              <td className="px-6 py-3">2024-03-01</td>
              <td className="px-6 py-3">100,000원</td>
              <td className="px-6 py-3">지급 완료</td>
            </tr>
            <tr className="border-b border-slate-200 odd:bg-white even:bg-slate-50">
              <td className="px-6 py-3">2024-02-01</td>
              <td className="px-6 py-3">100,000원</td>
              <td className="px-6 py-3">지급 완료</td>
            </tr>
            <tr className="border-b border-slate-200 odd:bg-white even:bg-slate-50">
              <td className="px-6 py-3">2024-01-01</td>
              <td className="px-6 py-3">100,000원</td>
              <td className="px-6 py-3">지급 완료</td>
            </tr>
          </tbody>
        </table>
        <PageButtons
          pagination={{
            content: [],
            number: 1,
            size: 5,
            totalPages: 5,
            totalElements: 25,
            first: true,
            hasNext: true,
          }}
          paginate={(page: number) => {}}
        />
      </div>
    </>
  );
};

export default SettlementPage;
