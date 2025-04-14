import React from 'react';
import { Link, useLocation } from 'react-router';

function DashboardHeader() {
  let location = useLocation();
  return (
    <header className='h-[10%] flex justify-between items-center px-12 border border-b-[1px] border-black/5'>
      {location.pathname !== '/dashboard/create-note' ? (
        <h1 className='font-bold text-2xl font-main'>noteflex</h1>
      ) : (
        <div className='flex items-center gap-6'>
          <h1 className='font-bold text-2xl font-main'>noteflex</h1>
          <h1 className='font-secondary text-sm mt-1'>note - draft</h1>
        </div>
      )}
      {location.pathname !== '/dashboard/create-note' && (
        <Link
          to='/dashboard/create-note'
          className='font-secondary text-base bg-[#005CE6] px-6 py-2 rounded-full text-white'
        >
          write note
        </Link>
      )}
    </header>
  );
}

export default DashboardHeader;
