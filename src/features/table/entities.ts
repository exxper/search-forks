import { RepoResponse } from './api/entities';

export interface State {
  forks: RepoResponse[];
  pageInfo: PageInfo;
  pending: boolean;
  error: string;
}

export interface ForksSuccess {
  forks: RepoResponse[];
  pageInfo: PageInfo;
}

export interface PageInfo {
  next: number;
  prev: number;
  last: number;
}
