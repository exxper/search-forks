import { combineReducers } from '@reduxjs/toolkit';

import { homeSlice } from '../features/home';
import { tableSlice } from '../features/table';

export default combineReducers({
  home: homeSlice,
  table: tableSlice,
});
