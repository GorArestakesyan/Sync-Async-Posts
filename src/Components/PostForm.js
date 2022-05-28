import React from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/actions";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
    this.onInputchange = this.onInputchange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  onInputchange(event) {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  }
  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    console.log(newPost);
    this.props.createPost(newPost);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label
            style={{
              display: "contents",
            }}
            htmlFor="title"
          >
            <input
              name="title"
              type="text"
              value={this.state.title}
              className="form-control"
              id="title"
              onChange={this.onInputchange}
            />
            <button
              type="submit"
              className="btn btn-success"
              onClick={this.submitHandler}
            >
              ADD
            </button>
          </label>
        </div>
      </form>
    );
  }
}
const mapDispatchToProps = {
  createPost,
};
export default connect(null, mapDispatchToProps)(PostForm);
