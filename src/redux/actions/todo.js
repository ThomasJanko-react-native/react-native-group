export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

//pourquoi function et non pas const?
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: {
      todo,
    },
  };
}
export function remove_todo(todo) {
  return {
    type: REMOVE_TODO,
    payload: {
      todo,
    },
  };
}
