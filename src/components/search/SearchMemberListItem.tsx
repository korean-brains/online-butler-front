import { MemberSearchResponse } from '../../types/Member';
import { Link } from 'react-router-dom';
import serverUrl from '../../utils/serverUrl';

interface SearchMemberListProps {
  member: MemberSearchResponse;
}

const SearchMemberListItem = ({ member }: SearchMemberListProps) => {
  return (
    <Link to={`/member/${member.id}/profile`}>
      <div className="my-4 flex h-12 px-5">
        <img
          src={
            (member.profileImage && serverUrl(member.profileImage)) ||
            '/images/default-profile.png'
          }
          alt="profile"
          className="aspect-square h-full rounded-full object-cover"
        />
        <div className="ms-3 flex flex-col">
          <span>{member.name}</span>
          <p className="text-sm text-gray-400">{member.introduction}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchMemberListItem;
