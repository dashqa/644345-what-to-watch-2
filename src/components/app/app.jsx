import React from "react";
import {Switch, Route} from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import MovieDetails from "../pages/movie-details/movie-details";

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route path='/films/:id' render={({match}) => (<MovieDetails movieId={parseInt(match.params.id, 10)}/>)}/>
    </Switch>
  );
};

export default App;
