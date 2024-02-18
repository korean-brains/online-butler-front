import { MemberSearchResponse } from '../../types/Member';
import { Link } from 'react-router-dom';

interface SearchMemberListProps {
  member: MemberSearchResponse;
}

const SearchMemberList = ({ member }: SearchMemberListProps) => {
  return (
    <Link to={`/member/${member.id}`}>
      <div className="my-4 flex h-12 px-5">
        <img
          src={member.profile}
          alt="profile"
          className="aspect-square h-full rounded-full object-cover"
        />
        <div className="ms-3 flex flex-col">
          <span>{member.nickname}</span>
          <p className="text-sm text-gray-400">{member.introduce}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchMemberList;
