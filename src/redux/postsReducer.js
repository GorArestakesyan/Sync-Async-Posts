import { CREATE_POST, DELETE_POST, FETCH_POST } from "./types";
import FetchElement from "../FetchElement";
const initialState = {
  posts: [],
  fetchedPosts: [],
};
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        ...state.fetchedPosts,
      };
    case FETCH_POST:
      return {
        ...state,
        fetchedPosts: action.payload,
      };
    default:
      return state;
  }
};
