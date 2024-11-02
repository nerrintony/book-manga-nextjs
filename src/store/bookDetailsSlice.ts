// src/store/slice.ts (bookSlice.ts)
import { VolumeInfo } from '@/LatestBookType/LatestBook.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { BookInfo } from '../types'; // Import the BookInfo type

export interface BookState {
  book?: VolumeInfo; // Optional property to store book data
  title?: string;
  authors?: string;
}
interface BookInfo {
  title: string;
  authors: string; // Assuming this is the correct structure
}

const initialState: BookState = {
  book: undefined,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    bookData: (state, action: PayloadAction<VolumeInfo>) => {
      state.book = action.payload; // Store the book data in state
    },
  },
});

// Action creators
export const { bookData } = bookSlice.actions;

export default bookSlice.reducer;
