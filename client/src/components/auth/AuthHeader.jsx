import React from 'react';
import { Link } from 'react-router';

function AuthHeader() {
  return (
    <header className='h-[10%] flex justify-between items-center px-12'>
      <Link to='/' className='font-bold text-2xl font-main'>
        noteflex
      </Link>
      <h5 className='font-secondary text-base'>
        new here?{' '}
        <span className='underline underline-offset-2 cursor-pointer'>
          create your account
        </span>
      </h5>
    </header>
  );
}

export default AuthHeader;
