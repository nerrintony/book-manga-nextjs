// src/store/slice.ts (counterSlice.ts)
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { BookInfo } from '../types'; // Import the BookInfo type

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
