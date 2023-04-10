// import {combineReducers, createStore} from 'redux';
// import rootReducer from './reducer';
// import themeReducer from './themeReducer';

// export const store = createStore(combineReducers({rootReducer, themeReducer}));

import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducer';
import themeReducer from './themeReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
//   whitelist: ['reducer', 'themeReducer']
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  rootReducer,
  themeReducer
}));

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
