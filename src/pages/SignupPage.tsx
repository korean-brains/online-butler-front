import { Link, useNavigate } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const SignupPage = () => {
  const navigate = useNavigate();
  const { signupParam, setSignupParam, submit } = useSignup();

  const onChangeSignupParam = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignupParam((param) => ({
      ...param,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await submit();
      navigate("/login");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center px-8">
      <Link to="/" className="mt-11">
        <span className="text-3xl font-bold">LOGO</span>
      </Link>
      <form onSubmit={handleSubmit} className="mt-8 flex w-full flex-col gap-5">
        <div>
          <label htmlFor="username">아이디</label>
          <input
            id="username"
            type="text"
            name="username"
            value={signupParam.username}
            onChange={onChangeSignupParam}
            className="input-primary mt-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={signupParam.password}
            onChange={onChangeSignupParam}
            className="input-primary mt-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          <input
            id="passwordConfirm"
            type="password"
            name="passwordConfirm"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={signupParam.passwordConfirm}
            onChange={onChangeSignupParam}
            className="input-primary mt-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="nickname">별명</label>
          <input
            id="nickname"
            type="text"
            name="nickname"
            value={signupParam.nickname}
            onChange={onChangeSignupParam}
            className="input-primary mt-2 w-full"
          />
        </div>
        <button className="btn-primary mt-5 w-full">회원가입</button>
      </form>

      <p className="mt-8">
        이미 회원이신가요?{" "}
        <Link to="/login" className="text-indigo-400">
          로그인
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
