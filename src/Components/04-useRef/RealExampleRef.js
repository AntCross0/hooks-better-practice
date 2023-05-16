import React, { useState } from 'react';
import MultiComponents from '../03-examples/MultiComponents';

const RealExampleRef = () => {



    const [ show, setShow ] = useState(false);
        



  return (
    <div>
      { show && <MultiComponents /> }
      <button className='mt-5 bg-indigo-500 text-white font-bold p-3 rounded'
      onClick={ () => { setShow(!show)}}
      
      >
        Mostrar / Detener
      </button>
    </div>
  )
}

export default RealExampleRef
