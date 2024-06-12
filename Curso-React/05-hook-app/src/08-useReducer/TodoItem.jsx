import { PropTypes } from 'prop-types';
import React from 'react';
// componente que contiene los todos que iteramos
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => (
  <>
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onDeleteTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  </>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string,
  }).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};
