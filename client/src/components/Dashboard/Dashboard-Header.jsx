import React from 'react';

function DashboardHeader() {
  return (
    <header className='h-[10%] flex justify-between items-center px-12 border border-b-[1px] border-black/5'>
      <h1 className='font-bold text-2xl font-main'>noteflex</h1>
      <button className='font-secondary text-base bg-[#005CE6] px-6 py-2 rounded-full text-white'>
        write note
      </button>
    </header>
  );
}

export default DashboardHeader;
