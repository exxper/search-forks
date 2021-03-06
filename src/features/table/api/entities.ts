export interface RepoResponse {
  id: number;
  full_name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
  html_url: string;
}

export interface ForksRequest {
  fullName: string;
  page?: string;
}
