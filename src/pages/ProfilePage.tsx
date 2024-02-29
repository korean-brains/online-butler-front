import React, { useContext, useEffect } from 'react';
import HeaderBack from '../components/header/HeaderBack';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetchMember from '../hooks/useFetchMember';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import useInputImage from '../hooks/useInputImage';
import useUpdateProfile from '../hooks/useUpdateProfile';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { authentication } = useContext(AuthenticationContext);
  const { data: member, isLoading } = useFetchMember(authentication!.id);
  const { param, setParam, submit } = useUpdateProfile();
  const { previewImage, image, onChangeImage } = useInputImage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && member) {
      setParam((prev) => ({
        ...prev,
        id: member.id,
        nickname: member.nickname,
        introduce: member.introduce,
      }));
    }
  }, [member, isLoading, setParam]);

  useEffect(() => {
    setParam((prev) => ({
      ...prev,
      profile: image,
    }));
  }, [image, setParam]);

  const handleSubmit = async () => {
    await submit();
    navigate('/mypage', { replace: true });
  };

  const handleChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParam((prev) => ({ ...prev, nickname: event.target.value }));
  };

  const handleChangeIntroduce = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setParam((prev) => ({ ...prev, introduce: event.target.value }));
  };

  return (
    <>
      <HeaderBack title="프로필 설정">
        <button className="btn-primary px-6" onClick={handleSubmit}>
          저장
        </button>
      </HeaderBack>
      <div className="px-5">
        <div className="relative mx-auto my-8 w-1/3">
          <img
            src={previewImage || member?.profile}
            alt="profile"
            className="aspect-square w-full rounded-full object-cover"
          />

          <label
            htmlFor="profile"
            className="absolute bottom-0 right-0 flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full bg-slate-200"
          >
            <FontAwesomeIcon icon={faCamera} />
          </label>
          <input
            id="profile"
            name="profile"
            type="file"
            multiple
            accept="image/*"
            onChange={onChangeImage}
            className="hidden"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="nickname">별명</label>
            <input
              id="nickname"
              name="nickname"
              className="input-primary"
              placeholder="별명을 입력해 주세요"
              value={param.nickname}
              onChange={handleChangeNickname}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="introduce">자기소개</label>
            <textarea
              id="introduce"
              name="introduce"
              rows={5}
              className="input-primary"
              placeholder="자기소개를 입력해 주세요"
              value={param.introduce}
              onChange={handleChangeIntroduce}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
