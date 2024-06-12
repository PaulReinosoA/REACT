import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
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

import { TodoApp } from './08-useReducer/TodoApp';

const root = createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <TodoApp />,
  // </React.StrictMode>,
);
