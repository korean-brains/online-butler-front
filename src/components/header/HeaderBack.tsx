import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

interface HeaderBackProps {
  title?: string;
  children?: React.ReactNode;
}

const HeaderBack = ({ title, children }: HeaderBackProps) => {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center border-b border-gray-200 px-5 py-3">
      <button onClick={onClickBack}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="aspect-square w-[24px]"
        />
      </button>
      {title && <span className="ms-3 font-semibold">{title}</span>}
      {children && (
        <div className="flex flex-grow items-center justify-end">
          {children}
        </div>
      )}
    </div>
  );
};

export default HeaderBack;
