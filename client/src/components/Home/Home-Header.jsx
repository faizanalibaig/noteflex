import React, { useEffect, useRef } from 'react';

const menu_list = ['terms & conditions', 'contact', 'about us', 'disclaimer'];

function HomeHeader() {
  const menu_ref = useRef(null);

  useEffect(() => {
    if (menu_ref.current) {
      menu_ref?.current?.childNodes.forEach((node) => {
        node.style.cursor = 'pointer';
      });
    }
  }, []);

  return (
    <header className='h-[10%] flex justify-between items-center px-5 sm:px-8 lg:px-10 xl:px-12 border border-b-[1px] border-black/5'>
      <h1 className='font-bold text-lg lg:text-xl xl:text-2xl font-main'>
        noteflex
      </h1>
      <nav>
        <ul
          className='hidden lg:flex gap-8 font-secondary lg:text-sm xl:text-base'
          ref={menu_ref}
        >
          {menu_list.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default HomeHeader;
