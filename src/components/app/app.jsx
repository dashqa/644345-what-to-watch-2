import React from "react";
import {Provider} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import store from "@store/store.js";
import {loadMovies, loadPromoMovie} from "@store/operations";

import MainPage from "@pages/main-page/main-page";
import MovieDetails from "@pages/movie-details/movie-details";

import withLoading from "@hocs/with-loading/with-loading";
const MainPageWrapped = withLoading(MainPage);
const MovieDetailsWrapped = withLoading(MovieDetails);

const App = () => {
  store.dispatch(loadMovies());
  store.dispatch(loadPromoMovie());

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainPageWrapped}/>
          <Route path='/films/:id' component={MovieDetailsWrapped}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
