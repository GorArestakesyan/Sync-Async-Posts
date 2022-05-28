import FetchedPosts from "./Components/FetchedPosts";
import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Post Form</h2>
          <PostForm/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Sync posts</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Async Posts</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
