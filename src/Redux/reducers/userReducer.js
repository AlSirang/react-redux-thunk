import * as UserConstants from "../actions/";

let initialState = {
  isDataLoading: false,
  isDataLoadingFailed: false,
  users: [],
};

export default function UserReducers(state = initialState, action) {
  switch (action.type) {
    case UserConstants.FETCH_USER:
      return {
        ...state,
        isDataLoading: true,
      };

    case UserConstants.FETCH_USER_SUCCESS:
      return {
        ...state,
        isDataLoading: false,
        users: [...state.users, action.payload],
      };

    case UserConstants.FETCH_USER_FAILURE:
      return {
        ...state,
        isDataLoading: false,
        isDataLoadingFailed: true,
      };

    default:
      return state;
  }
}
