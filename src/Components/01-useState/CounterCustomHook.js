import React from 'react'
import useCounter from '../../hooks/useCounter'

const CounterCustomHook = () => {
    const factor = 2;
    const minimo = 10;

    const {state, increment, decrement, reset} = useCounter( minimo, factor );


    return (
        <>
            <h1 className='font-bold text-4xl mt-3'> Counter with custom hook: <span className='animate-[ping_1s_ease-in-out] text-sky-400'>{ state }</span> </h1>
            <button onClick={ () => {increment()}} className='m-3 p-3 rounded bg-green-500 text-white font-bold'>
                { '+ ' + factor}
            </button>
            <button onClick={ reset } className='m-3 p-3 rounded bg-green-500 text-white font-bold'>
                reset to default
            </button>
            <button onClick={ () => {decrement()}} className='m-3 p-3 rounded bg-green-500 text-white font-bold'>
                {'- ' + factor}
            </button>

            
        </>
      )
}

export default CounterCustomHook
