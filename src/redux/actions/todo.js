export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const SET_SELECTED_TASK = 'SET_SELECTED_TASK';

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

export function update_todo(todo) {
  return {
    type: UPDATE_TODO,
    payload: {
      todo,
    },
  };
}

export const setSelectedTask = (task) => ({
  type: SET_SELECTED_TASK,
  payload: {task},
});