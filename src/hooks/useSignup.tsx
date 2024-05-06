import { useState } from 'react';
import { SignupRequest } from '../types/Auth';
import { FieldError } from '../types/Error';
import butlerApi from '../api/axiosInstance';

const useSignup = () => {
  const [signupParam, setSignupParam] = useState<SignupRequest>({
    username: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });

  const submit = async () => {
    validateSignupParam(signupParam);
    await butlerApi.post('/signup', {
      signupParam,
    });
  };

  return { signupParam, setSignupParam, submit };
};

export default useSignup;

const validateSignupParam = (signupParam: SignupRequest) => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;

  if (signupParam.username.length < 5) {
    throw new FieldError('아이디는 5자 이상이어야 합니다.');
  }
  if (signupParam.nickname.length === 0) {
    throw new FieldError('별명을 입력해주세요.');
  }
  if (!passwordRegex.test(signupParam.password)) {
    throw new FieldError(
      '비밀번호는 영문, 숫자, 특수문자 포함 8자 이상이어야 합니다.',
    );
  }
  if (signupParam.password !== signupParam.passwordConfirm) {
    throw new FieldError('비밀번호가 일치하지 않습니다.');
  }
};
