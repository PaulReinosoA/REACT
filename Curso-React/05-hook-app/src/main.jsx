import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
// import { CallbackHook } from './06-Memos/CallbackHook';
// import { MemorizeHook } from './06-Memos/MemorizeHook';
// import { Memorize } from './06-Memos/Memorize';
// import { Layout } from './05-useLayoutEfect/Layout';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { CounterApp } from './01-useState/CounterApp.jsx';
// import { HooksApp } from './HooksApp.jsx';
// import { TodoApp } from './08-useReducer/TodoApp';

import { MainApp } from './09-useContext/MainApp';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* BrowserRouter=>>high order component ==>>  Comp. Que Recibe otros componentes dentro de el */}
    {/* todos los hijos dentro del el tienen sierto acceso a la inf. del padre */}
    {/* <React.StrictMode> */}
    <MainApp />
    {/* </React.StrictMode>, */}
  </BrowserRouter>,
);
// Documentacion routing===>>>> https://reactrouter.com/en/main/upgrading/reach#install-react-router-v6
