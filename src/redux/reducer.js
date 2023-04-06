import {ADD_TODO, REMOVE_TODO} from './actions/todo';

const initialState = {
  //states go here
  count: 0,
  todos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // your action handlers go here

    //TODO
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload.todo.id),
      };

    default:
      return state;
  }
};

export default rootReducer;
