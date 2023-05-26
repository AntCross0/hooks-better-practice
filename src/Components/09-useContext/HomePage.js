import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { json } from 'react-router-dom';

const HomePage = () => {

    const userData = useContext(UserContext);
    console.log(userData);
    const { name, email } = userData.user;

    return (
        <main className='p-2'>
            <h1 className='font-bold text-2xl'>welcome, {name}</h1>
            <h3 className='font-semibold text-xl'>{email}</h3>
        </main>
    )
}

export default HomePage;
