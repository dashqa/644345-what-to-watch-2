import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import history from "@store/history";
import {Fetch} from "@constants";

import SignIn from "@pages/sign-in/sign-in";
import MainPage from "@pages/main-page/main-page";
import MovieDetails from "@pages/movie-details/movie-details";
import MoviePlayer from "@pages/movie-player/movie-player";
import AddReview from "@pages/add-review/add-review";
import MyList from "@pages/my-list/my-list";
import PageNotFound from "@pages/page-not-found/page-not-found";

import withLoaded from "@hocs/with-loaded/with-loaded";

const App = () => {
  return (
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
  );
};

export {App};

export default withLoaded(Fetch.MOVIES, Fetch.PROMO)(App);
