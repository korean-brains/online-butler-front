import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../api/auth/login";
import { AuthenticationContext } from "../contexts/AuthenticationContext";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setAuthentication } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const authentication = await login(username, password);
      setAuthentication(authentication);
      navigate("/", { replace: true });
    } catch (error) {
      alert("로그인 실패");
    }
  };

  const handleUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const handlePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div className="flex flex-col items-center px-8">
      <Link to="/" className="mt-11">
        <span className="text-3xl font-bold">LOGO</span>
      </Link>
      <form onSubmit={handleSubmit} className="mt-8 flex w-full flex-col gap-5">
        <input
          id="username"
          type="text"
          name="username"
          placeholder="아이디"
          className="input-primary w-full"
          value={username}
          onChange={handleUsername}
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="비밀번호"
          className="input-primary w-full"
          value={password}
          onChange={handlePassword}
        />
        <button className="btn-primary w-full">로그인</button>
      </form>

      <p className="mt-7">
        아직 회원이 아니신가요?{" "}
        <Link to="/signup" className="text-indigo-400">
          회원가입
        </Link>
      </p>

      <Link
        to="/oauth/kakao"
        className="btn-primary mt-16 w-full bg-yellow-300 text-gray-800"
      >
        카카오 로그인
      </Link>

      <Link
        to="/oauth/kakao"
        className="btn-primary mt-3 w-full bg-green-500  text-gray-800"
      >
        네이버 로그인
      </Link>
    </div>
  );
};

export default LoginPage;
