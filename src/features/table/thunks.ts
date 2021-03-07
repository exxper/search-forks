import parse from 'parse-link-header';

import { AppThunk } from '../../store';
import { actions as homeActions } from '../home/slice';
import { ForksRequest } from './api/entities';
import { SAVED_REPOS } from './constants';
import { getForks } from './api';
import { actions } from './slice';

export const getForksAction = (forksRequest: ForksRequest): AppThunk => async (
  dispatch,
) => {
  try {
    dispatch(actions.getForksPending());

    const { data, headers } = await getForks(forksRequest);
    const link = parse(headers.link);

    dispatch(
      actions.getForksSuccess({
        forks: data,
        pageInfo: link
          ? {
              first: +link.first?.page,
              prev: +link.prev?.page,
              next: +link.next?.page,
              last: +link.last?.page,
            }
          : null,
      }),
    );

    dispatch(homeActions.setInput(forksRequest.fullName));
  } catch (e) {
    dispatch(actions.getForksFailure());
    throw e;
  }
};

export const toggleFavoriteAction = (id: number): AppThunk => (
  dispatch,
  getState,
) => {
  try {
    const {
      table: { favorites },
    } = getState();
    const isFavorite = favorites.includes(id);
    let nextRepos = [];

    if (isFavorite) {
      nextRepos = favorites.filter((repoId) => repoId !== id);
    } else {
      nextRepos = [...favorites, id];
    }

    localStorage.setItem(SAVED_REPOS, JSON.stringify(nextRepos));
    dispatch(actions.setFavorites(nextRepos));
  } catch (e) {}
};
