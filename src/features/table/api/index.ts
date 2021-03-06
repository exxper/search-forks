import { AxiosResponse } from 'axios';

import apiService from '../../../api';
import { RepoResponse } from './entities';
import { FORKS } from './constants';

export const getForks = async (
  userRepo: string,
): Promise<AxiosResponse<RepoResponse[]>> => {
  return await apiService.get(FORKS(userRepo));
};
