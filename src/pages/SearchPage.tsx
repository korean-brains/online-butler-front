import HeaderSearch from '../components/header/HeaderSearch';
import { Outlet, useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const navigate = useNavigate();
  const onSubmit = (query: string) => {
    navigate(`/search/${query}`);
  };

  return (
    <>
      <HeaderSearch onSubmit={onSubmit} />
      <Outlet />
    </>
  );
};

export default SearchPage;
