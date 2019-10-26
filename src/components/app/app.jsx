import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import {MOVIES} from "../../mocks/movies";

const App = () => {
  const getMovie = (paramsId) => MOVIES.find(({id}) => id === parseInt(paramsId, 10));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => (<MainPage movies={MOVIES}/>)}/>
        <Route path='/films/:id' render={({match}) => (<MovieDetails movie={getMovie(match.params.id)}/>)}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
