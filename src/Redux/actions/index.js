import { getPostsList, getUsers } from "../../apis/jsonPlaceholder";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_POSTS });
  try {
    const response = await getPostsList();
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: FETCH_POSTS_FAILURE });
  }
};

export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUsers = (payload) => async (dispatch) => {
  dispatch({ type: FETCH_USER });
  try {
    const response = await getUsers(payload);
    dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: FETCH_USER_FAILURE });
  }
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  let { data: postsData } = getState().posts;

  let userIds = postsData.map((post) => post.userId);
  userIds
    .filter((userId, i) => userIds.indexOf(userId) === i)
    .forEach((user) => dispatch(fetchUsers(user)));
};
