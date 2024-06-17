import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../08-useReducer/TodoItem';

describe('Pruebas sobre <TodoItem/>', () => {
  const todo = {
    id: 1,
    description: 'Piedra del alma',
    todo: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks(); // en cada prueba se reinician las funciones como si estuvieran recien creadas cada vez qeu las vuelva a llamar en otro test
  });

  test('Debe de mostrar el todo pendiente de completar ', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />,
    );
    const listElement = screen.getByRole('listitem');
    // console.log(listElement.innerHTML);
    expect(listElement.className).toBe(
      'list-group-item d-flex justify-content-between',
    );

    const spanElement = screen.getByLabelText('span');
    // console.log(spanElement.className);
    expect(spanElement.className).toContain('align-self-center');
  });

  test('Debe de mostrar el todo completado ', () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />,
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('El span debe de llamar el toggleTodo cuenado se hace click', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />,
    );
    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('El boton debe de llamar el onDeleteTodo cuenado se hace click', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />,
    );
    const buttonElement = screen.getByText('Borrar');
    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
