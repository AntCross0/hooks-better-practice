import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

const MultiComponents = () => {

  const { state, increment, decrement} = useCounter( 1 , 1 );

  


  const url = `https://pokeapi.co/api/v2/pokemon/${ state }`;


  const {data, loading, error} = useFetch(url);
  const { id, name, sprite } = !!data && data;


  return (
    <>
    {
      loading ? <div className="transition-all border shadow rounded-xl p-4 max-w-sm w-full mx-auto overflow-hidden md:max-w-2xl">
      <div className="animate-pulse flex space-x-4 md:flex">
        <div className="rounded bg-slate-200 h-48 w-48"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div> :
      <div className="sm-max-w-60 transition translate-y-4 delay-150 max-w-md mx-auto bg-white rounded-xl shadow overflow-hidden md:max-w-2xl">
      <div className="md:flex ">
        <div className="md:shrink-0 transition-all transition-transform hover:translate-x-4 duration-1000 ease-in-out">
          <img className="  h-48 w-full object-cover md:h-full md:w-48" draggable='false' src={sprite} alt={ name }/>
        </div>
        <div className="p-2 flex-1">
          <div className="tracking-wide text-sm text-red-500 font-semibold  ">Pokemon: </div>
          
          <div className="tracking-wide text-sm text-indigo-500 font-semibold  ">Id: { id } </div>
          <div className="transition-all ease-in-out delay-200 uppercase tracking-wide text-5xl text-sky-400 font-bold">{ name }</div>

          <div className='flex w-full my-2 gap-3 justify-center transition ease-in '>


            {
              //disabled
              id == 1 ? <button disabled='true' className='invisible cursor-not-allowed rounded shadow-md w-full mx-2 mt-3 py-2 px-auto bg-slate-300 text-slate-400 font-normal'
              onClick={ decrement }

             > Previous Pokemon </button>:

             //enabled
      <button disable='false' className='transition-all delay-150  cursor-pointer rounded shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-110 w-full mx-2 mt-3 py-2 px-auto bg-indigo-400 text-white font-semibold  hover:bg-red-400'
      onClick={ decrement }
> Previous Pokemon </button>
            }
            <button className='transition-all delay-150  cursor-pointer rounded shadow-md transition ease-in-out	hover:-translate-y-1 hover:scale-110 w-full mx-2 mt-3 py-2 px-auto bg-blue-400 text-white font-semibold  hover:bg-sky-500'
                    onClick={ increment }
            > Next Pokemon </button>
          </div>
        </div>
      </div>
    </div>
    
    }
  </>
  )
}

export default MultiComponents
