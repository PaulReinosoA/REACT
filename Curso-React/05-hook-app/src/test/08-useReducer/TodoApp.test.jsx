import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../08-useReducer/TodoApp';
import { useTodo } from '../../08-useReducer/hooks/useTodo';

jest.mock('../../08-useReducer/hooks/useTodo.js');

describe('Pruebas sobre TodoApp', () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: 'todo #1', done: false },
      { id: 2, description: 'todo #2', done: true },
    ],
    toDoCount: 2,
    pendingToDoCount: 1,
    handLenNewTodo: jest.fn(),
    handLenDelTodo: jest.fn(),
    handLenToggleTodo: jest.fn(),
  });

  test('debe mostar el componente correctamente ', () => {
    render(<TodoApp />);
    // screen.debug();
    expect(screen.getByText('todo #1')).toBeTruthy();
    expect(screen.getByText('todo #2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();

    // console.log(screen.getByRole('textbox').className);
  });
});
