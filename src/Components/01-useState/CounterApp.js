import React, { useState } from 'react';

export const CounterApp = () => {
    const [ state, setState]  = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    })

    const {counter1, counter2} = state;

  return (
    <>
        <h1 className='font-bold text-4xl mt-3'> Counter1: <span className='text-sky-400'>{ counter1 }</span> </h1>
        <h1 className='font-bold text-4xl mt-3'> Counter2: <span className='text-sky-400'>{ counter2 }</span> </h1>
        <button className='mt-3 p-3 rounded bg-green-500 text-white'
            onClick={() => {
                setState( {...state,
                        counter1: counter1 + 1
                    }
                );
            }}
        >
            Agregar
        </button>
    </>
  )
}


