import React, { useMemo, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

const MemoHook = () => {

const { state, increment } = useCounter(5000,1);
const [show, setShow] = useState(true);


const memoprocesoPesado = useMemo( ()=> {procesoPesado(state)},[ state ]);


  return (
    <div>
        <p className='text-4xl'>Counter: {state} </p>
        <p>{memoprocesoPesado}</p>
        <button 
        className='rounded p-2 m-3 bg-indigo-400 text-white font-bold'
        onClick={ increment } >
            Increment + 1
        </button>
        <button 
        className='rounded p-2 m-3 bg-indigo-400 text-white font-bold'
        onClick={ () => {setShow(!show)} } >
            Show { JSON.stringify(show)}
        </button>
    </div>
  )
}

export default MemoHook
