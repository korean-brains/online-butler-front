import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
      <Link to="/">
        <span className="text-lg font-bold">LOGO</span>
      </Link>
      <Link to="/post/write">
        <FontAwesomeIcon icon={faSquarePlus} size="lg" />
      </Link>
    </div>
  );
};

export default Header;
