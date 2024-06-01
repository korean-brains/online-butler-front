import React, { useContext, useEffect } from 'react';
import HeaderBack from '../components/header/HeaderBack';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetchMember from '../hooks/useFetchMember';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import useInputImage from '../hooks/useInputImage';
import useUpdateProfile from '../hooks/useUpdateProfile';
import { useNavigate } from 'react-router-dom';
import serverUrl from '../utils/serverUrl';

const ProfileUpdatePage = () => {
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
        name: member.name,
        introduction: member.introduction,
      }));
    }
  }, [member, isLoading, setParam]);

  useEffect(() => {
    setParam((prev) => ({
      ...prev,
      profileImage: image,
    }));
  }, [image, setParam]);

  const handleSubmit = async () => {
    try {
      await submit();
      navigate('/mypage', { replace: true });
    } catch (e: any) {
      alert(e.message);
    }
  };

  const handleChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParam((prev) => ({ ...prev, name: event.target.value }));
  };

  const handleChangeIntroduction = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setParam((prev) => ({ ...prev, introduction: event.target.value }));
  };

  if (isLoading) {
    return <>Loading...</>;
  }
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
            src={
              previewImage ||
              (member!.profileImage && serverUrl(member!.profileImage)) ||
              '/images/default-profile.png'
            }
            alt="profile"
            className="aspect-square w-full rounded-full object-cover"
          />

          <label
            htmlFor="profileImage"
            className="absolute bottom-0 right-0 flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full bg-slate-200"
          >
            <FontAwesomeIcon icon={faCamera} />
          </label>
          <input
            id="profileImage"
            name="profileImage"
            type="file"
            multiple
            accept="image/*"
            onChange={onChangeImage}
            className="hidden"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">별명</label>
            <input
              id="name"
              name="name"
              className="input-primary"
              placeholder="별명을 입력해 주세요"
              value={param.name}
              onChange={handleChangeNickname}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="introduction">자기소개</label>
            <textarea
              id="introduction"
              name="introduction"
              rows={5}
              className="input-primary"
              placeholder="자기소개를 입력해 주세요"
              value={param.introduction}
              onChange={handleChangeIntroduction}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdatePage;
