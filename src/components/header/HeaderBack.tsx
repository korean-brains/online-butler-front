import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderBackProps {
  title: string;
}

const HeaderBack = ({ title }: HeaderBackProps) => {
  const onClickBack = () => {};

  return (
    <div className="flex items-center border-b border-gray-200 px-5 py-3">
      <button onClick={onClickBack}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="aspect-square w-[24px]"
        />
      </button>
      <span className="ms-3 font-semibold">{title}</span>
    </div>
  );
};

export default HeaderBack;
