import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/bottomNavigation/BottomNavigation";

const RootPage = () => {
  return (
    <div className="flex h-dvh flex-col">
      <div className="flex-grow overflow-y-scroll">
        <Outlet />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default RootPage;
