import React from 'react';
import { Link, useLocation } from 'react-router';

function UserHeader() {
  const location = useLocation();
  console.log(location);

  return (
    <header className='h-[10%] flex justify-between items-center px-12'>
      <Link to='/' className='font-bold text-2xl font-main'>
        noteflex
      </Link>
      <h5 className='font-secondary text-base'>
        new here?{' '}
        {location.pathname === '/auth/login' ? (
          <Link
            to='/auth/signup'
            className='underline underline-offset-2 cursor-pointer'
          >
            create your account
          </Link>
        ) : (
          <Link
            to='/auth/login'
            className='underline underline-offset-2 cursor-pointer'
          >
            login to your account
          </Link>
        )}
      </h5>
    </header>
  );
}

export default UserHeader;
