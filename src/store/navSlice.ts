// src/store/slice.ts (counterSlice.ts)
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { BookInfo } from '../types'; // Import the BookInfo type

export interface CounterState {
  theme: string;
  navIcons: string;
}

const initialState: CounterState = {
  theme: 'light',
  navIcons: 'books',
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    light: (state) => {
      state.theme = 'light';
    },
    dark: (state) => {
      state.theme = 'dark';
    },
    switchNavIcons: (state, action: PayloadAction<string>) => {
      state.navIcons = action.payload;
    },
  },
});

// Action creators
export const { light, dark, switchNavIcons } = navSlice.actions;

export default navSlice.reducer;
