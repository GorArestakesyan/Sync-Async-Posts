import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchPost } from "../redux/actions";
import Post from "../post";

function FetchedPosts() {
  const dispatch = useDispatch();
  const fetchedPosts = useSelector(state => state.PostsReducer.fetchedPosts);
  if (!fetchedPosts?.length) {
    return (
      <button className="btn btn-primary" onClick={() => dispatch(FetchPost())}>
        Загрузить
      </button>
    );
  }
  return fetchedPosts.map((post) => {
    return <Post key={post.id} post={post} />;
  });
}

export default FetchedPosts;
