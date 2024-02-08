import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../contexts/AuthenticationContext";
import { AuthenticationContextType } from "../types/Authentication";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import MemberIntroduce from "../components/member/MemberIntroduce";
import getMemberIntroduce from "../api/member/getMemberIntroduce";
import { MemberIntroduce as MemberIntroduceType } from "../types/Member";
import GridPost from "../components/post/GridPost";

const MyPage = () => {
  const navigate = useNavigate();
  const { authentication } = useContext<AuthenticationContextType>(
    AuthenticationContext,
  );
  const [memberIntroduce, setMemberIntroduce] = useState<MemberIntroduceType>(
    {} as MemberIntroduceType,
  );

  const onClick = () => {
    console.log("더보기");
  };

  useEffect(() => {
    if (!authentication) {
      navigate("/login");
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
    </>
  );
};

export default MyPage;
