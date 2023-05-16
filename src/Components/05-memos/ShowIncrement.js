import React from 'react'

const ShowIncrement = React.memo(({ increment }) => {

    console.log('Me volvi a llamar :c');

  return (
    <button className='p-2 m-3 bg-sky-400 text-white rounded font-bold'
      onClick={ () => {
        increment();
      } }>
        Increment
      </button>
  )
})

export default ShowIncrement
