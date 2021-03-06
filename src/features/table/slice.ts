import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RepoResponse } from './api/entities';

import { State } from './entities';

export const initialState: State = {
  forks: [],
  pending: false,
  error: '',
};

const slice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    getForksPending(state) {
      state.pending = true;
      state.error = '';
    },
    getForksSuccess(state, action: PayloadAction<RepoResponse[]>) {
      state.forks = action.payload;
      state.pending = false;
      state.error = '';
    },
    getForksFailure(state) {
      state.pending = false;
      state.error = 'Error has occurred';
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
