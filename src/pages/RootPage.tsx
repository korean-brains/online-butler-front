import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/bottomNavigation/BottomNavigation";

const RootPage = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-grow">
        <Outlet />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default RootPage;
