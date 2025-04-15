import { Outlet } from 'react-router';
import AuthHeader from '../components/Auth/AuthHeader';

function AuthLayout() {
  return (
    <>
      <AuthHeader />
      <Outlet />
    </>
  );
}

export default AuthLayout;
