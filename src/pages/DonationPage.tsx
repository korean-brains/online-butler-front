import { useNavigate, useParams } from 'react-router-dom';
import HeaderBack from '../components/header/HeaderBack';
import useFetchPost from '../hooks/useFetchPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import useDonation from '../hooks/useDonation';
import { useRef } from 'react';

const DonationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post } = useFetchPost(parseInt(id!));
  const { param, setParam, submit } = useDonation();
  const ref = useRef<HTMLInputElement>(null);

  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParam((prev) => ({
      ...prev,
      amount: parseInt(event.target.value.replace(/[^0-9]/g, '')) || 0,
    }));
  };

  const handleChangeMessage = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setParam((prev) => ({
      ...prev,
      message: event.target.value,
    }));
  };

  const increaseAmount = (amount: number) => {
    setParam((prev) => ({
      ...prev,
      amount: prev.amount + amount,
    }));
  };

  const onClickRest = () => {
    setParam((prev) => ({
      ...prev,
      amount: 0,
    }));
    ref.current?.focus();
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submit();
    navigate(-1);
  };

  return (
    <>
      <HeaderBack title="기부하기" />
      <div className="mt-3 flex px-5">
        <img
          src={post?.images[0]}
          alt="profile"
          className="aspect-square w-16 rounded-lg object-cover"
        />
        <div className="ms-4 flex flex-col">
          <h1>{post?.writer.name}</h1>
          <span className="line-clamp-2 text-ellipsis text-sm">
            {post?.caption}
          </span>
        </div>
      </div>

      <form className="my-10 px-5" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label htmlFor="amount">기부금액</label>
          <div className="input-primary flex items-center gap-2 text-xl font-semibold focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input
              ref={ref}
              inputMode="numeric"
              id="amount"
              name="amount"
              type="text"
              value={param.amount.toLocaleString('ko-kR')}
              min={1000}
              onChange={handleChangeAmount}
              className="flex-grow text-right outline-none"
            />
            <span>원</span>
            <button type="button" onClick={onClickRest}>
              <FontAwesomeIcon icon={faXmark} size="xs" />
            </button>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-1.5">
            <button
              type="button"
              className="rounded-md border border-gray-300 py-2 text-xs text-gray-600 shadow-sm"
              onClick={() => increaseAmount(1000)}
            >
              +1천원
            </button>
            <button
              type="button"
              className="rounded-md border border-gray-300 py-2 text-xs text-gray-600 shadow-sm"
              onClick={() => increaseAmount(5000)}
            >
              +5천원
            </button>
            <button
              type="button"
              className="rounded-md border border-gray-300 py-2 text-xs text-gray-600 shadow-sm"
              onClick={() => increaseAmount(10000)}
            >
              +1만원
            </button>
            <button
              type="button"
              className="rounded-md border border-gray-300 py-2 text-xs text-gray-600 shadow-sm"
              onClick={() => increaseAmount(30000)}
            >
              +3만원
            </button>
            <button
              type="button"
              className="rounded-md border border-gray-300 py-2 text-xs text-gray-600 shadow-sm"
              onClick={() => increaseAmount(50000)}
            >
              +5만원
            </button>
            <button
              type="button"
              className="rounded-md border border-gray-300 py-2 text-xs text-gray-600 shadow-sm"
              onClick={() => increaseAmount(100000)}
            >
              +10만원
            </button>
            <button
              type="button"
              className="rounded-md border border-gray-300 py-2 text-xs text-gray-600 shadow-sm"
              onClick={onClickRest}
            >
              직접입력
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col">
          <label htmlFor="message">메세지</label>
          <textarea
            id="message"
            name="message"
            maxLength={300}
            rows={6}
            className="input-primary"
            onChange={handleChangeMessage}
          />
        </div>

        <button className="btn-primary mt-6 w-full">기부하기</button>
      </form>
    </>
  );
};

export default DonationPage;
