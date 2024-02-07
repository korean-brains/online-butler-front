import {
  faHouse,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <nav className="flex w-full justify-around border-t border-gray-200 bg-white p-1">
      <Link to="/" className="aspect-auto p-2 hover:bg-gray-100">
        <FontAwesomeIcon icon={faHouse} />
      </Link>
      <Link to="/search" className="aspect-auto p-2 hover:bg-gray-100">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Link>
      <Link to="/mypage" className="aspect-auto p-2 hover:bg-gray-100">
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </nav>
  );
};

export default BottomNavigation;
