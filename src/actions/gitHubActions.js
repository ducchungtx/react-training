import { FETCH_GITHUB_USER } from "./actionTypes";

export const fetchGithubUser = (userName) => {
  return {
    type: FETCH_GITHUB_USER,
    userName
  };
};

