import { PropTypes } from 'prop-types';
import { useForm } from '../01-useState/Hooks/useForm';
// componente que contiene el formulario //y emite el onnewTodo
export const ToDoAdd = ({ onNewTodo }) => {
  const { description, OnInputChange, OnResetForm } = useForm({
    description: '',
  });

  const onformSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: String(new Date().getTime() + 1000),
      done: false,
      description,
    };
    onNewTodo(newTodo); // emision del todo
    OnResetForm(); // borra la caja de texto
  };

  return (
    <div>
      {/* toDoAdd y onnewtodo(todo) */}
      {/* todo {id, description done} */}
      <form onSubmit={(event) => onformSubmit(event)}>
        <input
          type="text"
          placeholder="¿Que hay que hacer?"
          className="form-control"
          name="description"
          value={description}
          onChange={OnInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-2">
          Agregar
        </button>
      </form>
      {/* toDoAdd y onnewtodo(todo) */}
    </div>
  );
};

ToDoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
