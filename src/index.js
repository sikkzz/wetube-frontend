import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import rootReducer from "./_reducers/index";

import "./index.css";
import App from "./App";

// const createStoreWithMiddleware = applyMiddleware(
//   promiseMiddleware,
//   ReduxThunk
// )(createStore);
// const store = createStoreWithMiddleware(rootReducer, composeWithDevTools());

// const persistor = persistStore(store);

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
