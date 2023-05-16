import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="m-3 p-2 px-4 bg-blue-400 rounded text-white font-bold"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
