import { AppThunk } from '../../store';
import { getForks } from './api';
import { actions } from './slice';

export const getForksAction = (userRepo: string): AppThunk => async (
  dispatch,
) => {
  try {
    dispatch(actions.getForksPending());
    const { data } = await getForks(userRepo);
    dispatch(actions.getForksSuccess(data));
  } catch (e) {
    dispatch(actions.getForksFailure());
    throw e;
  }
};
