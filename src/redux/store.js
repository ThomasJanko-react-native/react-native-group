//import { createStore } from 'redux'; //deprecated. use configureStore instead
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducer';

export const store = configureStore(rootReducer);
