import { MemberIntroduce as MemberIntroduceType } from '../../types/Member';
import serverUrl from '../../utils/serverUrl';

interface MemberIntroduceProps {
  memberIntroduce: MemberIntroduceType;
}

const MemberIntroduce = ({ memberIntroduce }: MemberIntroduceProps) => {
  return (
    <div className="mt-5 border-b-8 border-gray-200 px-5">
      <div className="flex items-center">
        <img
          src={
            (memberIntroduce.profileImage &&
              serverUrl(memberIntroduce.profileImage)) ||
            '/images/default-profile.jpg'
          }
          alt="profile"
          className="aspect-square h-16 rounded-full object-cover"
        />

        <div className="flex flex-grow items-center justify-around">
          <div className="flex flex-col items-center">
            <span className="font-semibold">{memberIntroduce.postCount}</span>
            <span className="text-sm">게시물</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-semibold">
              {memberIntroduce.followerCount}
            </span>
            <span className="text-sm">팔로워</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-semibold">
              {memberIntroduce.followingCount}
            </span>
            <span className="text-sm">팔로잉</span>
          </div>
        </div>
      </div>
      <p className="my-3">{memberIntroduce.introduce}</p>
    </div>
  );
};

export default MemberIntroduce;
