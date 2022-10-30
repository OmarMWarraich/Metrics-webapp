import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchAll from './api';

const initialState = [];

export const fetchAllAsync = createAsyncThunk(
  'home/fetchAll',
  async () => {
    const response = await fetchAll();
    return response;
  },
);

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAsync.fulfilled, (state, action) => {
        let newState = state;
        newState = action.payload;
        return newState;
      });
  },
});

export default homeSlice.reducer;
