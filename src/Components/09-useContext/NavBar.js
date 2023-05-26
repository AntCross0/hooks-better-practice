import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../index.css';

const NavBar = () => {
    return (
        <nav className='  bg-white relative top-0 p-2'>
            <div className='flex flex-row w-[50%] gap-4'>
                <Link className=' hover:bg-slate-300 py-1 px-[4rem] rounded bg-slate-200 text-center transition-all hover:scale-110  font-bold uppercase text-slate-400 text-xl ' to='/'>LOGO</Link>

                <NavLink exact activeclassname='active' className='transition-all w-32 text-center p-2 rounded bg-sky-400 text-white font-semibold hover:bg-sky-500 hover:scale-110' to='/'>HomePage</NavLink>

                <NavLink exact activeclassname='active' className='transition-all hover:scale-110 w-32 text-center p-2 rounded bg-sky-400 text-white font-semibold hover:bg-sky-500' to='/about'>About me</NavLink>

                <NavLink exact activeclassname='active' className='transition-all hover:scale-110 w-32 text-center p-2 rounded bg-sky-400 text-white font-semibold hover:bg-sky-500' to='/login'>login</NavLink>

            </div>
        </nav>
    )
}

export default NavBar
