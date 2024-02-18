import { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import { AuthenticationContextType } from '../types/Authentication';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsis,
  faGear,
  faHandHoldingDollar,
  faReceipt,
} from '@fortawesome/free-solid-svg-icons';
import MemberIntroduce from '../components/member/MemberIntroduce';
import getMemberIntroduce from '../api/member/getMemberIntroduce';
import { MemberIntroduce as MemberIntroduceType } from '../types/Member';
import GridPost from '../components/post/GridPost';
import Modal from '../components/modal/Modal';

const MyPage = () => {
  const navigate = useNavigate();
  const { authentication } = useContext<AuthenticationContextType>(
    AuthenticationContext,
  );
  const [memberIntroduce, setMemberIntroduce] = useState<MemberIntroduceType>(
    {} as MemberIntroduceType,
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (!authentication) {
      navigate('/login', { replace: true });
    }
  }, [authentication, navigate]);

  useEffect(() => {
    if (!authentication) {
      return;
    }

    getMemberIntroduce(authentication.id).then((memberIntroduce) =>
      setMemberIntroduce(memberIntroduce),
    );
  }, [authentication]);

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
        <span className="text-lg">마이페이지</span>
        <button onClick={onClick}>
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
      <MemberIntroduce memberIntroduce={memberIntroduce} />
      <GridPost id={memberIntroduce.id} />
      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)}>
          <div className="flex min-w-[300px] flex-col gap-5">
            <Link to={'/profile'}>
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
            <Link to={'/adjustment'}>
              <FontAwesomeIcon icon={faReceipt} className="w-[24px]" />
              <span className="ms-3">정산하기</span>
            </Link>
            <button className="text-left">로그아웃</button>
            <button className="text-left">회원탈퇴</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default MyPage;
