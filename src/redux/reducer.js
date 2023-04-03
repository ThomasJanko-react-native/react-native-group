import { ADD_TODO, REMOVE_TODO } from "./actions/todo";
import { SET_THEME } from "./actions/themeMode";

const initialState = {
  //states go here
    count: 0,
    todos: [],
  }

  
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      // your action handlers go here

      //TODO
      case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
      }
      case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((t) => t !== action.payload.todo),
      }

      case 'SET_THEME':
      return action.theme;


      default:
        return state;
    }
  }
  
  export default rootReducer;
  

