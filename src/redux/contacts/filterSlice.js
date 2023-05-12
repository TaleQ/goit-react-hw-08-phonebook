import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    toggleFilter: {
      reducer(_, action) {
        return action.payload;
      },
    },
  },
});

export const { toggleFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
