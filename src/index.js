import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { FormWithCustomHook } from './Components/02-useEffect/FormWithCustomHook';
import MultiComponents from './Components/03-examples/MultiComponents';


//import { HookApp } from './HookApp';
// import { CounterApp } from './Components/01-useState/CounterApp';
// import CounterCustomHook from './Components/01-useState/CounterCustomHook';
//import { SimpleForm } from './Components/02-useEffect/SimpleForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<HookApp />
  //<CounterApp />
  //<CounterCustomHook />
  //<SimpleForm />
  //<FormWithCustomHook />
  <div className='p-2'>
    <MultiComponents />
  </div>
);
