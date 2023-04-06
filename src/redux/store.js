import {combineReducers, createStore} from 'redux';
import rootReducer from './reducer';
import themeReducer from './themeReducer';

export const store = createStore(combineReducers({rootReducer, themeReducer}));
