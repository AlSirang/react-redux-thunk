import * as PostConstatns from "../actions/";

let initialState = {
  isDataLoading: false,
  isDataLoadingFailed: false,
  data: [],
};

export default function PostsReducer(state = initialState, action) {
  switch (action.type) {
    case PostConstatns.FETCH_POSTS:
      return {
        ...state,
        isDataLoading: true,
      };

    case PostConstatns.FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        isDataLoading: false,
        data: [...state.data, ...action.payload],
      };
    }

    case PostConstatns.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isDataLoading: false,
        isDataLoadingFailed: true,
      };

    default:
      return state;
  }
}
