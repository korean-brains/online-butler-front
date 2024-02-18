import { Outlet } from 'react-router-dom';

const RootPageNoBottomNavigation = () => {
  return (
    <div className="absolute h-full w-full overflow-y-scroll scrollbar-hide">
      <Outlet />
    </div>
  );
};

export default RootPageNoBottomNavigation;
