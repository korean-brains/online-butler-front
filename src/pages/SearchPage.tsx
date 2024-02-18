import HeaderSearch from '../components/header/HeaderSearch';
import { Outlet, useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const navigate = useNavigate();
  const onSubmit = (query: string) => {
    if (query[0] === '#') {
      navigate(`/search/tag/${query.slice(1)}`);
    } else {
      navigate(`/search/member/${query}`);
    }
  };

  return (
    <>
      <HeaderSearch onSubmit={onSubmit} />
      <Outlet />
    </>
  );
};

export default SearchPage;
