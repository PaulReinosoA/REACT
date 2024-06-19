export const todoReducer = (initialSate = [], action = {}) => {
  switch (action.type) {
    case '[TODO] add todo':
      return [...initialSate, action.payload]; // mi state es un arreglo entonces retorno un arreglo
    case '[TODO] remove todo':
      return initialSate.filter((todo) => todo.id !== action.payload); // no muta el arreglo solo envia un nuevo arreglo sin el elemento enviado
    case '[TODO] toggle todo':
      return initialSate.map((todo) => {
        if (todo.id === action.payload) {
          // payload = todo.id
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      }); // no muta el arreglo solo envia un nuevo arreglo sin el elemento enviado
    default:
      return initialSate;
  }
};
