import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './entities';

export const initialState: State = {
  input: '',
};

const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setInput(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
