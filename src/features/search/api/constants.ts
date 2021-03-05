import { ForksRequest } from './entities';

export const FORKS = (data: ForksRequest): string =>
  `${data.username}/${data.repo}`;
