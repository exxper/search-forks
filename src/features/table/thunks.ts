import parse from 'parse-link-header';

import { actions as homeActions } from '../home/slice';
import { ForksRequest } from './api/entities';
import { AppThunk } from '../../store';
import { getForks } from './api';
import { actions } from './slice';

export const getForksAction = (forksRequest: ForksRequest): AppThunk => async (
  dispatch,
) => {
  try {
    dispatch(actions.getForksPending());

    const { data, headers } = await getForks(forksRequest);
    const link = parse(headers.link)!;

    dispatch(
      actions.getForksSuccess({
        forks: data,
        pageInfo: {
          next: +link.next?.page,
          prev: +link.prev?.page,
          last: +link.last?.page,
        },
      }),
    );

    dispatch(homeActions.setInput(forksRequest.fullName));
  } catch (e) {
    dispatch(actions.getForksFailure());
    throw e;
  }
};
