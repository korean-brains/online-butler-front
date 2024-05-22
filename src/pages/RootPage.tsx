import { Outlet } from 'react-router-dom';
import BottomNavigation from '../components/bottomNavigation/BottomNavigation';
import AxiosConfig from '../api/AxiosConfig';

const RootPage = () => {
  return (
    <div className="relative flex min-h-dvh flex-col bg-white">
      <AxiosConfig />
      <div className="w-full flex-grow">
        <Outlet />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default RootPage;
