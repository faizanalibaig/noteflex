import React from 'react';

function AuthHeader() {
  return (
    <header className='h-[10%] flex justify-between items-center px-12'>
      <h1 className='font-bold text-lg font-main'>noteflex</h1>
      <h5 className='font-medium text-base font-secondary'>
        new here?
        <span className='underline underline-offset-2'>
          create your account
        </span>
      </h5>
    </header>
  );
}

export default AuthHeader;
