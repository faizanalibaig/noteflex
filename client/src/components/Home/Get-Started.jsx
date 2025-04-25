import React from 'react';

import { BsArrowBarRight } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';
import { MdNote } from 'react-icons/md';

import { Link } from 'react-router';

function GetStarted() {
  return (
    <section className='h-[90%] relative'>
      <section className='h-full flex justify-center items-center px-60'>
        <div className='flex flex-col justify-center items-center gap-5 mb-32'>
          <div className='bg-[#005CE6]/5 border-2 border-[#005CE6]/30 w-96 h-[38px] rounded-full px-5 text-[#005CE6] flex justify-center items-center gap-2 font-secondary text-base'>
            <p>write your daily important notes</p>
            <MdNote className='text-lg mt-[1px]' />
          </div>

          <h1 className='font-bold text-7xl font-main'>
            Get Started With Noteflex
          </h1>
          <p className='text-center font-secondary text-base'>
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
      <div className='absolute bottom-10 left-12'>
        <Link
          to='https://github.com/faizanalibaig/noteflex'
          target='_blank'
          className='flex items-center gap-2 outline-none font-secondary font-medium'
        >
          <span>
            <FaGithubAlt className='text-xl' />
          </span>
        </Link>
      </div>

      <div className='absolute bottom-10 right-12'>
        <Link
          to='/auth/login'
          className='flex items-center gap-2 outline-none font-secondary font-medium'
        >
          <span>get started</span> <BsArrowBarRight />
        </Link>
      </div>
    </section>
  );
}

export default GetStarted;
