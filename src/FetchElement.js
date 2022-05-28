import React from "react";
import { connect } from "react-redux";

const FetchElement = ({ Names }) => {
  return Names.map((elem) => {
    return (
      <form className="card" key={Math.random().toString()}>
        <h5 className="card-body" key={elem.id}>
          Name : {elem}
        </h5>
      </form>
    );
  });
};
const mapStateToProps = (state) => {
  const names = state.PostsReducer.fetchedPosts.map((elem) => {
    return elem.text;
  });
  return {
    Names: names,
  };
};

export default connect(mapStateToProps)(FetchElement);
