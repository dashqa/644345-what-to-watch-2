import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";

import {Operation, rootReducer} from "@store/reducers";

import App from "./components/app/app.jsx";
import createAPI from "@api/api";

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(rootReducer, composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
  ));

  store.dispatch((Operation.loadMovies()));
  store.dispatch((Operation.loadPromoMovie()));

  ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>,
      document.querySelector(`#root`));
};

init();
