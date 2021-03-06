import { RepoResponse } from './api/entities';

export interface State {
  forks: RepoResponse[];
  pending: boolean;
  error: string;
}
