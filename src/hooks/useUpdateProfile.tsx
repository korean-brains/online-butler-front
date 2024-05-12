import { useState } from 'react';
import butlerApi from '../api/axiosInstance';
import { MemberProfileUpdateRequest } from '../types/Member';

const useUpdateProfile = () => {
  const [param, setParam] = useState<MemberProfileUpdateRequest>({
    id: 0,
    name: '',
    introduction: '',
    profileImage: new File([], 'empty_image.png', { type: 'image/png' }),
  });

  const submit = async () => {
    const formData = new FormData();
    formData.append('name', param.name);
    formData.append('introduction', param.introduction);
    formData.append('profileImage', param.profileImage);

    const response = await butlerApi.post(`/api/member/${param.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  };

  return { param, setParam, submit };
};

export default useUpdateProfile;
