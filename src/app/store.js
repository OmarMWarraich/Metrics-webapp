import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homeReducer from '../features/home/homeSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
});

/* eslint-disable-next-line import/prefer-default-export */
export const store = configureStore({
  reducer: rootReducer,
});
