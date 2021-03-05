import { AxiosResponse } from 'axios';

import apiService from '../../../api';
import { ForksRequest } from './entities';
import { FORKS } from './constants';

export const getForks = async (
  forksRequest: ForksRequest,
): Promise<AxiosResponse<undefined>> => {
  // ^-- fixme
  return await apiService.get(FORKS(forksRequest));
};
