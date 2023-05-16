import React from 'react';
import useCounter from '../../hooks/useCounter';
import RenderValue from './RenderValue';

const Memorize = () => {

const { state, increment } = useCounter(1,1);


  return (
    <div>
        <p className='text-4xl'>Counter: <RenderValue value={state} /> </p>

        <button 
        className='rounded p-2 m-3 bg-indigo-400 text-white font-bold'
        onClick={ increment } >
            Increment + 1
        </button>
    </div>
  )
}

export default Memorize
