import { useContext, useEffect } from "react";
import { AuthenticationContext } from "../contexts/AuthenticationContext";
import { AuthenticationContextType } from "../types/Authentication";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const { authentication } = useContext<AuthenticationContextType>(
    AuthenticationContext,
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!authentication) {
      navigate("/login");
    }
  }, [authentication, navigate]);

  return <div>MyPage</div>;
};

export default MyPage;
