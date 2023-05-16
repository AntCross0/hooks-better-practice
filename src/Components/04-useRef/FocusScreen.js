import React, { useRef } from 'react'



const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }






  return (
    <div>
        
    <input
    type='text'
    ref={ inputRef }
    placeholder='Nombre'
    >
    </input>
    <button onClick={ handleClick }
    > Focus </button>
    </div>
  )
}

export default FocusScreen
