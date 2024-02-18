import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

interface HeaderSearchProps {
  onSubmit(query: string): void;
}

const HeaderSearch = ({ onSubmit }: HeaderSearchProps) => {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query) return;

    onSubmit(query);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="flex items-center border-b border-gray-200 px-5 py-3">
      <button onClick={onClickBack}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="aspect-square w-[24px]"
        />
      </button>

      <form
        className="input-primary ms-3 flex flex-grow items-center"
        onSubmit={handleSubmit}
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
        />
      </form>
    </div>
  );
};

export default HeaderSearch;
