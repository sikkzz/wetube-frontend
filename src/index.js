import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./modules";

import "./index.css";
import App from "./App";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
