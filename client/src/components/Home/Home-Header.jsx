import React from 'react';

function HomeHeader() {
  return (
    <header className='h-[10%] flex justify-between items-center px-12 border border-b-[1px] border-black/5'>
      <h1 className='font-bold text-2xl font-main'>noteflex</h1>
      <nav className='flex'>
        <ul className='flex gap-6 font-secondary text-base'>
          <li>terms & conditions</li>
          <li>contact</li>
          <li>about us</li>
          <li>disclaimer</li>
        </ul>
      </nav>
    </header>
  );
}

export default HomeHeader;
