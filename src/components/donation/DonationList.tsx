import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";

const DonationList = () => {
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
            selected={new Date()}
            onChange={(date) => console.log(date)}
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
            selected={new Date()}
            onChange={(date) => console.log(date)}
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
          <tr className="border-b border-slate-200 odd:bg-white even:bg-slate-50">
            <td className="px-6 py-3">
              <div className="flex flex-col">
                <span>2024-02-01</span>
                <span className="text-sm text-gray-500">15:00</span>
              </div>
            </td>
            <td className="px-6 py-3">1만원</td>
            <td className="px-6 py-3">고먐미</td>
          </tr>
          <tr className="border-b border-slate-200 odd:bg-white even:bg-slate-50">
            <td className="px-6 py-3">
              <div className="flex flex-col">
                <span>2024-02-01</span>
                <span className="text-sm text-gray-500">15:00</span>
              </div>
            </td>
            <td className="px-6 py-3">1만원</td>
            <td className="px-6 py-3">고먐미</td>
          </tr>
          <tr className="border-b border-slate-200 odd:bg-white even:bg-slate-50">
            <td className="px-6 py-3">
              <div className="flex flex-col">
                <span>2024-02-01</span>
                <span className="text-sm text-gray-500">15:00</span>
              </div>
            </td>
            <td className="px-6 py-3">1만원</td>
            <td className="px-6 py-3">고먐미</td>
          </tr>
          <tr className="border-b border-slate-200 odd:bg-white even:bg-slate-50">
            <td className="px-6 py-3">
              <div className="flex flex-col">
                <span>2024-02-01</span>
                <span className="text-sm text-gray-500">15:00</span>
              </div>
            </td>
            <td className="px-6 py-3">1만원</td>
            <td className="px-6 py-3">고먐미</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DonationList;
