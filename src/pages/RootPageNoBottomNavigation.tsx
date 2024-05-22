import { Outlet } from 'react-router-dom';
import AxiosConfig from '../api/AxiosConfig';

const RootPageNoBottomNavigation = () => {
  return (
    <div className="relative min-h-dvh w-full">
      <AxiosConfig />
      <Outlet />
    </div>
  );
};

export default RootPageNoBottomNavigation;
