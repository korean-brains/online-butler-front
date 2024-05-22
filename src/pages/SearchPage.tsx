import { useSearchParams } from 'react-router-dom';
import HeaderBack from '../components/header/HeaderBack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import SearchTagList from '../components/search/SearchTagList';
import SearchMemberList from '../components/search/SearchMemberList';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState<string>(searchParams.get('keyword') || '');

  useEffect(() => {
    searchParams.set('keyword', query);
    setSearchParams(searchParams, { replace: true });
  }, [query, searchParams, setSearchParams]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <HeaderBack>
        <form
          className="input-primary  ms-3 flex flex-grow items-center"
          onSubmit={onSubmit}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="sm"
            className="text-slate-400"
          />
          <input
            className="ms-2 flex-grow outline-none"
            placeholder="검색"
            onChange={handleChange}
            value={query}
          />
        </form>
      </HeaderBack>

      {query.startsWith('#') && query.length > 1 && (
        <SearchTagList tag={query.slice(1)} />
      )}
      {!query.startsWith('#') && query && <SearchMemberList name={query} />}
    </>
  );
};

export default SearchPage;
