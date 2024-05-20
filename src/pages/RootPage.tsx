import { Outlet } from 'react-router-dom';
import BottomNavigation from '../components/bottomNavigation/BottomNavigation';
import AxiosConfig from '../api/AxiosConfig';

const RootPage = () => {
  return (
    <div className="flex h-dvh flex-col">
      <AxiosConfig />
      <div className="flex-grow overflow-y-scroll scrollbar-hide">
        <Outlet />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default RootPage;
