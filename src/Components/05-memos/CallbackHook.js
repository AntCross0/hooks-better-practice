import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

    const [counter, setCounter] = useState(5);

  
    const increment = useCallback( () => {
            setCounter( c => c + 1);
    }, [setCounter]);


  return (
    <div>
      <p>Counter: {counter} </p>
      <ShowIncrement increment={ increment } />
    </div>

  )
}

export default CallbackHook
