import { CREATE_POST, DELETE_POST, FETCH_POST } from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}
export const FetchPost = () => {
  return async (dispatch) => {
    const api = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const JsonData = await api.json();
    dispatch({
      type: FETCH_POST,
      payload: JsonData,
    });
  };
};
