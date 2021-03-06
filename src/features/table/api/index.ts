import { AxiosResponse } from 'axios';

import apiService from '../../../api';
import { ForksRequest, RepoResponse } from './entities';
import { FORKS } from './constants';

export const getForks = async (
  data: ForksRequest,
): Promise<AxiosResponse<RepoResponse[]>> => {
  return await apiService.get(FORKS(data));
};
