import axios from "axios";

import { BASE_URL, GITHUB_TOKEN } from "./constants";

const apiService = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

export default apiService;
