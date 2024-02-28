import { useState } from 'react';
import butlerApi from '../api/axiosInstance';
import { MemberProfileUpdateRequest } from '../types/Member';

const useUpdateProfile = () => {
  const [param, setParam] = useState<MemberProfileUpdateRequest>({
    id: 0,
    profile: new File([], 'empty_image.png', { type: 'image/png' }),
    nickname: '',
    introduce: '',
  });

  const submit = async () => {
    const formData = new FormData();
    formData.append('profile', param.profile);
    formData.append('nickname', param.nickname);
    formData.append('introduce', param.introduce);

    const response = await butlerApi.patch(`/member/${param.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  };

  return { param, setParam, submit };
};

export default useUpdateProfile;
