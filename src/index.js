import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import store from "@store/store";
import {loadMovies, loadPromoMovie} from "@store/movies-data/actions";

const init = () => {
  store.dispatch(loadMovies());
  store.dispatch(loadPromoMovie());

  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>, document.querySelector(`#root`));
};

init();
