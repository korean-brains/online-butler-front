import { Outlet } from 'react-router-dom';
import BottomNavigation from '../components/bottomNavigation/BottomNavigation';
import AxiosConfig from '../api/AxiosConfig';

const RootPage = () => {
  return (
    <div className="relative min-h-dvh bg-white">
      <AxiosConfig />
      <div className="w-full">
        <Outlet />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default RootPage;
