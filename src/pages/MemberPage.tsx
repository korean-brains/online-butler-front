import { useParams } from 'react-router-dom';
import MemberIntroduce from '../components/member/MemberIntroduce';
import GridPost from '../components/post/GridPost';
import HeaderBack from '../components/header/HeaderBack';
import useFetchMember from '../hooks/useFetchMember';

const MemberPage = () => {
  const { id } = useParams();
  const {
    data: memberIntroduce,
    isLoading,
    isError,
  } = useFetchMember(parseInt(id!));

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return (
      <>
        <HeaderBack title="존재하지 않는 회원입니다."></HeaderBack>
      </>
    );
  }

  return (
    <>
      <HeaderBack title={memberIntroduce ? memberIntroduce.name : ''}>
        {memberIntroduce!.followed && (
          <button className="btn-primary">팔로잉</button>
        )}
        {!memberIntroduce!.followed && (
          <button className="ms-auto rounded-md bg-gray-200 px-3 py-1 text-sm font-semibold">
            팔로우
          </button>
        )}
      </HeaderBack>
      <MemberIntroduce memberIntroduce={memberIntroduce!} />
      <GridPost id={memberIntroduce!.id} />
    </>
  );
};

export default MemberPage;
