import { useEffect, useReducer } from 'react';
import { todoReducer } from '../todoReducer';

export const useTodo = () => {
  const initialState = [];

  const init = () => JSON.parse(localStorage.getItem('todos')) || []; // hace persisitente la informacion en el local storage pues guarda los items grabados en el metodo que inicializa cuando recargampos

  const [todos, dispach] = useReducer(todoReducer, initialState, init);
  // cuando el todo cambia ejecutamos un efecto secundario
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) || ''); // solo graboStrings
  }, [todos]); // esta es mi dependencia por que cuando el todo cambie guardo en el localstorage

  const handLenNewTodo = (todo) => {
    const action = {
      type: '[TODO] add todo',
      payload: todo,
    };
    dispach(action); // despacha la acion en este caso de add --todoReducer
    // console.log(todo); // {id: '1718210480422', done: false, description: 'dfasd'}
  };

  const handLenDelTodo = (id) => {
    const action = {
      type: '[TODO] remove todo',
      payload: id,
    };
    dispach(action); // despacha la acion en este caso de add --todoReducer
    // console.log(todo); // {id: '1718210480422', done: false, description: 'dfasd'}
  };

  const handLenToggleTodo = (id) => {
    const action = {
      type: '[TODO] toggle todo',
      payload: id,
    };
    dispach(action); // despacha la acion en este caso de add --todoReducer
    // console.log(id);
  };

  const toDoCount = todos.length;
  const pendingToDoCount = todos.filter((todo) => !todo.done).length;

  return {
    todos,
    toDoCount,
    pendingToDoCount,
    handLenNewTodo,
    handLenDelTodo,
    handLenToggleTodo,
  };
};
