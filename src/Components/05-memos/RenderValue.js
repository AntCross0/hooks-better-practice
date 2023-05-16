import React from 'react'

const RenderValue = React.memo(( {value} ) => {


  return (
    <span className='text-sky-400 font-bold'>{ value }</span>
  )


});

export default RenderValue
