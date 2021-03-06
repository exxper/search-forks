import { ForksRequest } from './entities';

export const FORKS = ({ fullName, page }: ForksRequest): string =>
  `repos/${fullName}/forks${`?page=${page || 1}`}`;
