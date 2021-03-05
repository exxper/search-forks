import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './entities';

export const initialState: State = {
  input: '',
  pending: false,
  error: '',
};

const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getForksPending(state) {
      state.pending = true;
      state.error = '';
    },
    getForksSuccess(state, action) {},
    getForksFailure() {},
  },
});

export const { actions } = slice;

export default slice.reducer;
