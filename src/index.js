import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import App from "./App";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
