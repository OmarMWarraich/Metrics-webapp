import { configureStore, combineReducers } from '@reduxjs/toolkit';
import homeReducer from '../features/home/homeSlice';

const rootReducer = combineReducers({
  home: homeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;