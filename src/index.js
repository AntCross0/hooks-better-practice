import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


//import { HookApp } from './HookApp';
// import { CounterApp } from './Components/01-useState/CounterApp';
// import CounterCustomHook from './Components/01-useState/CounterCustomHook';
import { SimpleForm } from './Components/02-useEffect/SimpleForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<HookApp />
  //<CounterApp />
  //<CounterCustomHook />
  <div className='p-2'>
    <SimpleForm />
  </div>
);
