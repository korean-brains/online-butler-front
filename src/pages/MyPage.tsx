import { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsis,
  faGear,
  faHandHoldingDollar,
  faReceipt,
} from '@fortawesome/free-solid-svg-icons';
import MemberIntroduce from '../components/member/MemberIntroduce';
import GridPost from '../components/post/GridPost';
import Modal from '../components/modal/Modal';
import useFetchMyPage from '../hooks/useFetchMyPage';
import useLogout from '../hooks/useLogout';

const MyPage = () => {
  const navigate = useNavigate();
  const { authentication } = useContext(AuthenticationContext);
  const { data: memberIntroduce, isLoading } = useFetchMyPage();
  const { logout } = useLogout();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onClickLogout = () => {
    logout();
    navigate('/login');
  };

  useEffect(() => {
    if (!authentication.isAuthenticated) {
      navigate('/login?redirect=/mypage', { replace: true });
    }
  }, [authentication, navigate]);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
        <span className="text-lg">마이페이지</span>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
      <MemberIntroduce memberIntroduce={memberIntroduce!} />
      <GridPost id={memberIntroduce!.id} />
      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)}>
          <div className="flex min-w-[300px] flex-col gap-5">
            <Link to={'/profile/update'}>
              <FontAwesomeIcon icon={faGear} className="w-[24px]" />
              <span className="ms-3">프로필 설정</span>
            </Link>
            <Link to={'/donation'}>
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                className="w-[24px]"
              />
              <span className="ms-3">후원 내역</span>
            </Link>
            <Link to={'/settlement'}>
              <FontAwesomeIcon icon={faReceipt} className="w-[24px]" />
              <span className="ms-3">정산 내역</span>
            </Link>
            <button className="text-left" onClick={onClickLogout}>
              로그아웃
            </button>
            <button className="text-left">회원탈퇴</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default MyPage;
