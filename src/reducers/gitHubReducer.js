import { FETCH_GITHUB_USER, FETCH_GITHUB_USER_SUCCESS, FETCH_GITHUB_USER_FAIL } from "../actions/actionTypes";

let initialData = {
    data: [],
    error: false
}

const gitHubReducer = (data = initialData, action) => {
  switch (action.type) {
    case FETCH_GITHUB_USER:
      return data;
    case FETCH_GITHUB_USER_SUCCESS:
      return { data: action.receivedData, error: false };
    case FETCH_GITHUB_USER_FAIL:
      return { data: [], error: true }
    default:
      return data;
  }
};

export default gitHubReducer;
