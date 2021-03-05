import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './entities';

export const initialState: State = {
  input: '',
};

const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
});

export const { actions } = slice;

export default slice.reducer;
