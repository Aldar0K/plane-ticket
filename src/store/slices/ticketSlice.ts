import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ticketState {
  from: string;
  to: string;
  there: string;
  back: string;
}

const initialState: ticketState = {
  from: '',
  to: '',
  there: '',
  back: '',
};

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    changeFrom: (state, action: PayloadAction<string>) => {
      state.from = action.payload;
    },
    changeTo: (state, action: PayloadAction<string>) => {
      state.to = action.payload;
    },
    changeThere: (state, action: PayloadAction<string>) => {
      state.there = action.payload;
    },
    changeBack: (state, action: PayloadAction<string>) => {
      state.back = action.payload;
    },
  },
});

export const { changeFrom, changeTo, changeThere, changeBack } = ticketSlice.actions;

export default ticketSlice.reducer;
