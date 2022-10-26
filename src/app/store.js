import { configureStore, combineReducers } from '@reduxjs/toolkit';
import homeReducer from '../features/home/homeSlice';

const rootReducer = combineReducers({
  home: homeReducer,
});

/* eslint-disable-next-line import/prefer-default-export */
export const store = configureStore({
  reducer: rootReducer,
});
