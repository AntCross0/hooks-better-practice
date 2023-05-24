import React from 'react';



const TodoItem = ( {todo, deleteAction} ) => {
    

  return (
    <>
      <div className='properties'>
              <h3 className=' text-md font-bold text-slate-900 
              transition-all ease-in-out duration-300  delay-75
              group-hover:translate-x-2 group-hover:text-slate-500 '>{todo.title}</h3>

              <p className=' text-sm text-semibold text-slate-500 
              transition-all ease-in-out duration-300 group-hover:translate-x-2
              group-hover:text-slate-400 '>{todo.desc}</p>
            </div>
            <button
              onClick={()=>{ deleteAction(todo.id)}}
              className=' my-auto bg-red-600 text-white rounded-full py-1 px-2 flex gap-2 font-medium justify-between items-center 
              invisible transition-all
              group-hover:transition-all group-hover:-translate-x-4 delay-100 group-hover:visible
              overflow-x-hidden hover:bg-red-500' 
              >Delete
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
              className="w-5 h-5 delay-150 opacity-0 translate-x-6 transition-all group-hover:-translate-x-0 group-hover:opacity-100">
              <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
              </svg>
            </button>
    </>
  );
}

export default TodoItem

/*

     <div 
     className={ todo.done === true ? ' completed flex justify-between space-x-3 rounded py-3 px-2 group-hover:bg-gray-200': 'flex justify-between space-x-3 rounded py-3 px-2 group-hover:bg-gray-200'}>
       <div className='properties'>
         <h3 className=' text-md font-bold text-slate-900 
         transition-all ease-in-out duration-300  delay-75
         group-hover:translate-x-2 group-hover:text-slate-500 '>{todo.title}</h3>

         <p className=' text-sm text-semibold text-slate-500 
         transition-all ease-in-out duration-300 group-hover:translate-x-2
          group-hover:text-slate-400 '>{todo.desc}</p>
       </div>
       <button
         onClick={()=>{ deleteAction(todo.id)}}
         className=' my-auto bg-red-600 text-white rounded-full py-1 px-2 flex gap-2 font-medium justify-between items-center 
         invisible transition-all
         group-hover:transition-all group-hover:-translate-x-4 delay-100 group-hover:visible
         overflow-x-hidden hover:bg-red-500' 
         >Delete
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
         className="w-5 h-5 delay-150 opacity-0 translate-x-6 transition-all group-hover:-translate-x-0 group-hover:opacity-100">
         <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
         </svg>
       </button>

*/