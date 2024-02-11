import { useParams } from "react-router-dom";
import HeaderBack from "../components/header/HeaderBack";
import useFetchPost from "../hooks/useFetchPost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const DonationPage = () => {
  const { id } = useParams();
  const { data: post } = useFetchPost(parseInt(id!));

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
          <h1>{post?.member.nickname}</h1>
          <span className="line-clamp-2 text-ellipsis text-sm">
            {post?.description}
          </span>
        </div>
      </div>

      <form className="mt-10 px-5">
        <div className="flex flex-col">
          <label htmlFor="amount">기부금액</label>
          <div className="input-primary flex items-center gap-2 text-xl font-semibold focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input
              inputMode="numeric"
              id="amount"
              name="amount"
              type="number"
              className="flex-grow text-right outline-none"
            />
            <span>원</span>
            <button type="button">
              <FontAwesomeIcon icon={faXmark} size="xs" />
            </button>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-1.5">
            <button className="rounded-md border border-gray-300 py-2 text-xs text-gray-600 shadow-sm">
              +1천원
            </button>
            <button className="rounded-md border border-gray-300 py-2 text-xs text-gray-600 shadow-sm">
              +5천원
            </button>
            <button className="rounded-md border border-gray-300 py-2 text-xs text-gray-600 shadow-sm">
              +1만원
            </button>
            <button className="rounded-md border border-gray-300 py-2 text-xs text-gray-600 shadow-sm">
              +3만원
            </button>
            <button className="rounded-md border border-gray-300 py-2 text-xs text-gray-600 shadow-sm">
              +5만원
            </button>
            <button className="rounded-md border border-gray-300 py-2 text-xs text-gray-600 shadow-sm">
              +10만원
            </button>
            <button className="rounded-md border border-gray-300 py-2 text-xs text-gray-600 shadow-sm">
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
          />
        </div>

        <button className="btn-primary mt-6 w-full">기부하기</button>
      </form>
    </>
  );
};

export default DonationPage;
