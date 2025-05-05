import { Outlet } from 'react-router';
import { UserHeader } from '../components/UserAuth/index';

function UserLayout() {
  return (
    <div className='h-[100dvh] overflow-hidden'>
      <UserHeader />
      <Outlet />
    </div>
  );
}

export default UserLayout;
