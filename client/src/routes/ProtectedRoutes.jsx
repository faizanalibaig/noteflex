import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoutes() {
  const [screen, setScreen] = useState(false);
  const [user, setUser] = useState(null);
  //   const isLoggedIn = localStorage.getItem('login');

  useEffect(async () => {
    const data = await fetch('', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    if (!data) throw new Error('There is an error in the verifying user');
    setUser(data);

    const { innerWidth: width } = window;
    if (width < 620) {
      setScreen(true);
    }
  }, []);

  if (!user) {
    return screen ? <Navigate to='/check-pc' /> : <Navigate to='/auth/login' />;
  }

  return <Outlet />;
}
