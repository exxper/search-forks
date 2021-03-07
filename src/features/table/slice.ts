import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ForksSuccess, State } from './entities';

export const initialState: State = {
  forks: [],
  favorites: [],
  pageInfo: null,
  pending: false,
  error: '',
};

const slice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    getForksPending(state) {
      state.pending = true;
      state.forks = [];
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
    setFavorites(state, action: PayloadAction<number[]>) {
      state.favorites = action.payload;
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
