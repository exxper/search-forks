import { AxiosResponse } from 'axios';

import apiService from '../../../api';
import { Repo } from './entities';

export const getForks = async (
  userRepo: string,
): Promise<AxiosResponse<Repo[]>> => {
  return await apiService.get(userRepo);
};
