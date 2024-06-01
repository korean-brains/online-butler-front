import { useState } from 'react';
import butlerApi from '../api/axiosInstance';
import { MemberProfileUpdateRequest } from '../types/Member';
import { useMutation } from 'react-query';

const useUpdateProfile = () => {
  const [param, setParam] = useState<MemberProfileUpdateRequest>({
    id: 0,
    name: '',
    introduction: '',
    profileImage: new File([], 'empty_image.png', { type: 'image/png' }),
  });

  const mutation = useMutation((param: MemberProfileUpdateRequest) => {
    const formData = new FormData();
    formData.append('name', param.name);
    formData.append('introduction', param.introduction);
    formData.append('profileImage', param.profileImage);

    return butlerApi.post(`/api/member/${param.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  });

  const submit = async () => {
    if (!param.name.trim()) {
      throw new Error('별명을 입력해주세요.');
    }
    if (!param.introduction.trim()) {
      throw new Error('자기소개를 입력해주세요.');
    }

    const response = await mutation.mutateAsync(param);
    return response.data;
  };

  return { param, setParam, submit };
};

export default useUpdateProfile;
