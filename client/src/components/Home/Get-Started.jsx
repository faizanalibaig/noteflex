import React from 'react';

function GetStarted() {
  return (
    <section className='h-[90%] relative'>
      <section className='h-full flex justify-center items-center px-60'>
        <div className='flex flex-col justify-center items-center gap-5 mb-20'>
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
      <button className='absolute bottom-6 right-10 px-8 py-4 outline-none font-secondary font-medium'>
        get started {'->'}
      </button>
    </section>
  );
}

export default GetStarted;
