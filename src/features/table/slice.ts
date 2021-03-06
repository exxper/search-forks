import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ForksSuccess, State } from './entities';

export const initialState: State = {
  forks: [],
  pageInfo: {
    next: 0,
    prev: 0,
    last: 0,
  },
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
    getForksSuccess(state, action: PayloadAction<ForksSuccess>) {
      const { forks, pageInfo } = action.payload;

      state.forks = forks;
      state.pageInfo = pageInfo;
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
