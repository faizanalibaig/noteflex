import React from 'react';
import { Link } from 'react-router';

function NoteHeader() {
    return (
        <header className='h-[80px] flex justify-between items-center px-12'>
             <Link to='/dashboard' className='font-bold text-2xl font-main'>
                noteflex
             </Link>
        </header>
    );
}

export default NoteHeader;
