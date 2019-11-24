import React from "react";
import {Provider} from "react-redux";
import {Switch, Route, Router} from "react-router-dom";
import history from "@store/history";

import store from "@store/store.js";
import {loadMovies, loadPromoMovie} from "@store/movies-data/actions";

import SignIn from "@pages/sign-in/sign-in";
import MainPage from "@pages/main-page/main-page";
import MovieDetails from "@pages/movie-details/movie-details";
import MoviePlayer from "@pages/movie-player/movie-player";
import AddReview from "@pages/add-review/add-review";
import MyList from "@pages/my-list/my-list";
import PageNotFound from "@pages/page-not-found/page-not-found";

const App = () => {
  store.dispatch(loadMovies());
  store.dispatch(loadPromoMovie());

  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/films/:id' component={MovieDetails}/>
          <Route path='/films/:id/review' component={AddReview}/>
          <Route path='/films/:id/player' component={MoviePlayer}/>
          <Route path='/my-list' component={MyList}/>
          <Route path='/login' component={SignIn}/>
          <Route component={PageNotFound}/>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
