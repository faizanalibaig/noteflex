import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function ProtectedRoutes() {
  const [screen, setScreen] = useState(false);
  const [cookies] = useCookies(['login']);
  const isLoggedIn = cookies.login ? true : false;

  useEffect(() => {
    const { innerWidth: width } = window;
    if (width < 620) {
      setScreen(true);
    }
  }, []);

  if (!isLoggedIn) {
    return screen ? <Navigate to='/check-pc' /> : <Navigate to='/auth/login' />;
  }

  return <Outlet />;
}
