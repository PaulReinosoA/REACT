// import React, { useEffect, useReducer } from 'react';
// import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { ToDoAdd } from './ToDoAdd';
import { useTodo } from './hooks/useTodo';

export const TodoApp = () => {
  // const initialState = [
  //   // {
  //   //   id: String(new Date().getTime() + 1000),
  //   //   description: 'recolectar la piedra del alma',
  //   //   done: false,
  //   // },
  //   // {
  //   //   id: String(new Date().getTime() * 3),
  //   //   description: 'recolectar la piedra del tiempo',
  //   //   done: false,
  //   // },
  // ];

  // const init = () => JSON.parse(localStorage.getItem('todos')) || []; // hace persisitente la informacion en el local storage pues guarda los items grabados en el metodo que inicializa cuando recargampos

  // const [todos, dispach] = useReducer(todoReducer, initialState, init);
  // // cuando el todo cambia ejecutamos un efecto secundario
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos) || ''); // solo graboStrings
  // }, [todos]); // esta es mi dependencia por que cuando el todo cambie guardo en el localstorage

  // const handLenNewTodo = (todo) => {
  //   const action = {
  //     type: '[TODO] add todo',
  //     payload: todo,
  //   };
  //   dispach(action); // despacha la acion en este caso de add --todoReducer
  //   // console.log(todo); // {id: '1718210480422', done: false, description: 'dfasd'}
  // };

  // const handLenDelTodo = (id) => {
  //   const action = {
  //     type: '[TODO] remove todo',
  //     payload: id,
  //   };
  //   dispach(action); // despacha la acion en este caso de add --todoReducer
  //   // console.log(todo); // {id: '1718210480422', done: false, description: 'dfasd'}
  // };

  // const handLenToggleTodo = (id) => {
  //   const action = {
  //     type: '[TODO] toggle todo',
  //     payload: id,
  //   };
  //   dispach(action); // despacha la acion en este caso de add --todoReducer
  //   // console.log(id);
  // };

  const {
    todos,
    toDoCount,
    pendingToDoCount,
    handLenNewTodo,
    handLenDelTodo,
    handLenToggleTodo,
  } = useTodo();

  return (
    <>
      <h1>TodoApp</h1>
      <h2>
        ToDos: {toDoCount}, <small> Pendings: {pendingToDoCount}</small>
      </h2>
      <hr />
      <div>
        <div className="row">
          <div className="col-7">
            <TodoList
              todos={todos === undefined ? [] : todos}
              onDeleteTodo={(id) => handLenDelTodo(id)}
              onToggleTodo={(id) => handLenToggleTodo(id)}
            />
          </div>
          <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <ToDoAdd onNewTodo={(todo) => handLenNewTodo(todo)} />{' '}
          </div>
        </div>
      </div>
    </>
  );
};
