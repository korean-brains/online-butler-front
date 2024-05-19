import { Link } from 'react-router-dom';
import { TagSearchResponse } from '../../types/Tag';
import numberToKorean from '../../utils/numberToKorean';

interface SearchTagListProps {
  tag: TagSearchResponse;
}

const SearchTagListItem = ({ tag }: SearchTagListProps) => {
  return (
    <Link to={`/tag/${tag.name}`}>
      <div className="my-4 flex h-12 items-center px-5">
        <span className="flex aspect-square h-full items-center justify-center rounded-full bg-slate-200 object-cover text-xl font-bold">
          #
        </span>
        <div className="ms-3 flex flex-col">
          <span>{tag.name}</span>
          <p className="text-sm text-gray-400">{`게시물 ${numberToKorean(tag.postCount)}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchTagListItem;
