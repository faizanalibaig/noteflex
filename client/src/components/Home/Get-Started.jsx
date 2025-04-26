import React from 'react';

import { BsArrowBarRight } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';
import { MdNote } from 'react-icons/md';

import { Link } from 'react-router';

function GetStarted() {
  return (
    <section className='h-[90%] relative'>
      <section className='h-full flex justify-center items-center px-5 sm:px-28 lg:px-40 xl:px-60'>
        <div className='flex flex-col justify-center items-center gap-5 mb-32'>
          <div className='bg-[#005CE6]/5 border border-[#005CE6]/10 w-auto h-8 sm:h-[38px] rounded-full px-4 sm:px-6  text-[#005CE6] flex justify-center items-center gap-2'>
            <p className=' font-secondary text-xs lg:text-sm xl:text-base font-medium'>
              write your daily important notes
            </p>
            <MdNote className='text-lg mt-[1px] hidden sm:block' />
          </div>

          <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-main'>
            Get Started With Noteflex
          </h1>
          <p className='text-center font-secondary text-xs sm:text-sm xl:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            harum iure facere atque voluptate iste veritatis expedita hic
            praesentium ad vel corporis ex aliquid cumque nihil odit
            perspiciatis, necessitatibus quo deleniti asperiores? Doloremque
            ipsa tempore voluptate, quod temporibus adipisci modi molestiae
            ullam at officiis? Rerum quis impedit corporis consequuntur
            reprehenderit!
          </p>
        </div>
      </section>
      <div className='absolute bottom-10 left-5 sm:left-12'>
        <Link
          to='https://github.com/faizanalibaig/noteflex'
          target='_blank'
          className='flex items-center gap-2 outline-none font-secondary font-medium'
        >
          <span>
            <FaGithubAlt className='sm::text-base xl:text-xl' />
          </span>
        </Link>
      </div>

      <div className='absolute bottom-10 right-5 sm:right-12'>
        <Link
          to='/auth/login'
          className='flex items-center gap-2 outline-none font-secondary font-medium text-xs sm:text-sm xl:text-base'
        >
          <span>get started</span> <BsArrowBarRight />
        </Link>
      </div>
    </section>
  );
}

export default GetStarted;
