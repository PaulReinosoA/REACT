import { todoReducer } from '../../08-useReducer/todoReducer';

describe('Pruebas sobre todoReducer.test.js', () => {
  const initialState = [
    {
      id: 1,
      description: '',
      done: false,
    },
  ];

  test('Debe de regresar el estado inicial ', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('Debe de agregar un todo ', () => {
    const action = {
      type: '[TODO] add todo',
      payload: {
        id: 2,
        description: 'Nuevo todo #2',
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('Debe de eliminar un todo', () => {
    const action = {
      type: '[TODO] remove todo',
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test('Debe realizar el toggle del toDo(valor boolean del done) ', () => {
    const action = {
      type: '[TODO] toggle todo',
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.filter((s) => s.id === 1)[0].done).toBeTruthy();
  });
});
