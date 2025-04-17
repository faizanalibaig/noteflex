import { Outlet } from 'react-router';
import { UserHeader } from '../components/UserAuth/index';

function UserLayout() {
  return (
    <>
      <UserHeader />
      <Outlet />
    </>
  );
}

export default UserLayout;
