import { Outlet } from 'react-router-dom';
import AxiosConfig from '../api/AxiosConfig';

// const RootPageNoBottomNavigation = () => {
//   return (
//     <div className="absolute h-full w-full overflow-y-scroll scrollbar-hide">
//       <AxiosConfig />
//       <Outlet />
//     </div>
//   );
// };
const RootPageNoBottomNavigation = () => {
  return (
    <div className="relative min-h-dvh w-full">
      <AxiosConfig />
      <Outlet />
    </div>
  );
};

export default RootPageNoBottomNavigation;
