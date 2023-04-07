import {ADD_TODO, REMOVE_TODO, UPDATE_TODO, SET_SELECTED_TASK} from './actions/todo';

const initialState = {
  //states go here
  count: 0,
  todos: [],
  selectedTask: null,
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
        todos: state.todos.filter(t => t !== action.payload.todo),
      };

    case UPDATE_TODO:
      return {
      ...state,
      todos: state.todos.map(t => t.id === action.payload.todo.id ? action.payload.todo : t),
      };

    case SET_SELECTED_TASK:
      return {
        ...state,
        selectedTask: action.payload,
      };
        

    default:
      return state;
  }
};

export default rootReducer;
