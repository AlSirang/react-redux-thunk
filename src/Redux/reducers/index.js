import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import UsersReducer from "./userReducer";

export default combineReducers({
  posts: postsReducer,
  users: UsersReducer,
});
