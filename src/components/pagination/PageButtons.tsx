import { PageResponse } from '../../types/Page';

interface PageButtonProps {
  pagination: PageResponse<any> | undefined;
  paginate(pageNumber: number): void;
}

const PageButtons = ({ pagination, paginate }: PageButtonProps) => {
  if (!pagination || pagination.totalElements === 0) {
    return (
      <div className="mt-8 flex justify-center">
        <button className="border border-slate-200 px-3 py-2 text-indigo-600 hover:bg-indigo-100">
          1
        </button>
      </div>
    );
  }

  const pageNumberCount = 5;
  const pageNumbers = [];
  const startPageNum =
    (Math.ceil(pagination.number / pageNumberCount) - 1) * pageNumberCount + 1;
  const endPageNum = startPageNum + pageNumberCount - 1;

  for (
    let i = startPageNum;
    i <= endPageNum && i <= pagination.totalPages;
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-8 flex justify-center">
      {pagination.number > pageNumberCount && (
        <button
          className="border border-slate-200 px-3 py-2 text-gray-400 hover:bg-indigo-100"
          onClick={() => paginate(startPageNum - 1)}
        >
          &laquo;
        </button>
      )}
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`border border-slate-200 px-3 py-2 ${number === pagination.number ? 'text-indigo-600' : 'text-gray-400 hover:bg-indigo-100 '}`}
          onClick={() => paginate(number)}
          disabled={number === pagination.number}
        >
          {number}
        </button>
      ))}
      {pagination.totalPages > endPageNum && (
        <button
          className="border border-slate-200 px-3 py-2 text-gray-400 hover:bg-indigo-100"
          onClick={() => paginate(endPageNum + 1)}
        >
          &raquo;
        </button>
      )}
    </div>
  );
};

export default PageButtons;
