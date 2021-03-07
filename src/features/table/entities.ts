import { RepoResponse } from './api/entities';

export interface State {
  forks: RepoResponse[];
  favorites: number[];
  pageInfo: PageInfo | null;
  pending: boolean;
  error: string;
}

export interface ForksSuccess {
  forks: RepoResponse[];
  pageInfo: PageInfo | null;
}

export interface PageInfo {
  first: number;
  prev: number;
  next: number;
  last: number;
}
