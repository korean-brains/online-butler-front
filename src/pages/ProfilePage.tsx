import HeaderBack from '../components/header/HeaderBack';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfilePage = () => {
  return (
    <>
      <HeaderBack title="프로필 설정">
        <button
          className="btn-primary px-6"
          onClick={() => console.log('클릭')}
        >
          저장
        </button>
      </HeaderBack>
      <div className="px-5">
        <div className="relative mx-auto my-8 w-1/3">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="aspect-square w-full rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 aspect-square w-10 rounded-full bg-slate-200">
            <FontAwesomeIcon icon={faCamera} />
          </button>
        </div>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="nickname">별명</label>
            <input
              id="nickname"
              name="nickname"
              className="input-primary"
              placeholder="별명을 입력해 주세요"
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
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfilePage;
