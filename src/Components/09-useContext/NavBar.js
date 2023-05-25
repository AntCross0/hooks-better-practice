import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='bg-white relative top-0 py-2'>
            <ul className='flex flex-row justify-around space-x-2 w-[30%] gap-2'>
                <div className='cursor-pointer hover:bg-slate-300 w-48 p-2 rounded bg-slate-200 text-center'>
                    <Link to='/' className='transition-all hover:scale-110  font-bold uppercase text-slate-400 text-xl'> LOGO </Link>
                </div>
                <il className='transition-all hover:scale-110  w-32 text-center p-2 rounded bg-sky-400 text-white font-semibold hover:bg-sky-500 cursor-pointer'>
                    <Link to='/'>HomePage</Link>
                </il>
                <il className='transition-all hover:scale-110  w-32 text-center p-2 rounded bg-sky-400 text-white font-semibold hover:bg-sky-500 cursor-pointer'>
                    <Link to='/about'>About me</
                    Link></il>
                <il className='transition-all hover:scale-110  w-32 text-center p-2 rounded bg-sky-400 text-white font-semibold hover:bg-sky-500 cursor-pointer'>
                    <Link to='/login'>login</Link>
                </il>
            </ul>
        </nav>
    )
}

export default NavBar
