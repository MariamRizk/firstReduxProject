import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./containers/Card.js";
import * as serviceWorker from "./serviceWorker";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index.js";

const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <Card />
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
