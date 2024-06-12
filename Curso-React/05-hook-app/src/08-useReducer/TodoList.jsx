import { PropTypes } from 'prop-types';
import { TodoItem } from './TodoItem';
// componente que contiene la lista ul con todos
export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => (
  <>
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  </>
);

TodoList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todos: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};
