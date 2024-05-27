import { Link, useLocation, useNavigate } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import { useContext, useEffect } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const LoginPage = () => {
  const { authentication } = useContext(AuthenticationContext);
  const { loginParam, setLoginParam, submit } = useLogin();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (authentication.isAuthenticated) {
      navigate(location.state?.redirect || '/', { replace: true });
    }
  }, [authentication]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await submit();
      navigate(location.state?.redirect || '/', { replace: true });
    } catch (error) {
      alert('로그인 실패');
    }
  };

  const onChangeLoginParam = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginParam((param) => ({
      ...param,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="flex flex-col items-center px-8">
      <Link to="/" className="mt-11">
        <span className="text-3xl font-bold">LOGO</span>
      </Link>
      <form onSubmit={handleSubmit} className="mt-8 flex w-full flex-col gap-5">
        <input
          id="email"
          type="text"
          name="email"
          placeholder="아이디"
          className="input-primary w-full"
          value={loginParam.email}
          onChange={onChangeLoginParam}
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="비밀번호"
          className="input-primary w-full"
          value={loginParam.password}
          onChange={onChangeLoginParam}
        />
        <button className="btn-primary w-full">로그인</button>
      </form>

      <p className="mt-7">
        아직 회원이 아니신가요?{' '}
        <Link to="/signup" className="text-indigo-400">
          회원가입
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
