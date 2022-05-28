import Post from "../post";
import React from "react";
import { connect } from "react-redux";
const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className="text-center">Don't have any Post</p>;
  }
  return syncPosts.map((post) => {
    return <Post key={post.id} post={post} id={post.id} />;
  });
};
const mapStateToProps = (state) => {
  return {
    syncPosts: state.PostsReducer.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
